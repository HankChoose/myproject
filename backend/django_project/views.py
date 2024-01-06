

import json
from .models import UserApply
from datetime import datetime
from allauth.account.models import EmailAddress, EmailConfirmation
from allauth.account.views import ConfirmEmailView, LoginView
from allauth.account.decorators import login_required
from allauth.account.utils import send_email_confirmation
from allauth.account.views import EmailVerificationSentView

from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from django.contrib import messages
from django.contrib.auth.models import User

from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.http import HttpResponseServerError, HttpResponse
from django.db import connection
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.views.generic import TemplateView
from django.shortcuts import get_object_or_404
from django.views.decorators.http import require_POST

from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken, obtain_auth_token
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import UserApply
from .serializers import UserApplySerializer

from .serializers import UserSerializer, UserApplySerializer
import os
from django.conf import settings


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_change_username(request):
    new_username = request.data.get('new_username')

    if not new_username:
        return Response({'error': 'New username is required'}, status=400)

    # 获取当前用户
    user = request.user

    # 更新用户名
    user.username = new_username
    user.save()

    return Response({'message': 'Username updated successfully'})


@api_view(['GET'])
@login_required
# @permission_classes([IsAuthenticated])
def check_verification_status(request):
    user_email = request.user.email

    # 获取用户的EmailAddress对象
    email_address = get_object_or_404(
        EmailAddress, user=request.user, email=user_email)

    # 获取email_verified的值
    is_verified = email_address.verified
    return Response({'is_verified': is_verified})


@api_view(['POST'])
@login_required
@permission_classes([IsAuthenticated])
def resend_verification_email(request):
    # 使用 get_user_model() 获取用户模型
    # User.objects.filter(email=email).exists()
    try:
        # 获取用户的 EmailAddress 对象
        user = User.objects.get(email=request.user.email)
        email_address = EmailAddress.objects.get(user=user, email=user.email)
    except User.DoesNotExist:
        return Response({'detail': 'User not found.'}, status=400)
    except EmailAddress.DoesNotExist:
        return Response({'detail': 'No verified email address found for this user.'}, status=400)

    if email_address.verified:
        return Response({'detail': 'Email address is already verified.'}, status=400)

    # 重新发送验证邮件
    send_email_confirmation(request, email_address)

    return Response({'detail': 'Verification email has been resent.'})

# -------------------------------------------->Check exists email


def CheckEmailExistView(request, email):
    # return JsonResponse({'email': email})
    # email_exists = EmailAddress.objects.filter(email=email, verified=False).exists()
    email_exists = EmailAddress.objects.filter(email=email).exists()
    return JsonResponse({'exists': email_exists})


class UserTokenView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})


@api_view(['POST'])
@permission_classes([AllowAny])
def user_auth_token(request):
    return obtain_auth_token(request)


@method_decorator(csrf_protect, name='dispatch')
class UserProfileView(APIView):
    def get(self, request, *args, **kwargs):
        user_email = request.user.email
        user_profiles = User.objects.filter(email=user_email)
        serializer = UserSerializer(user_profiles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@method_decorator(csrf_protect, name='dispatch')
class UserProfileView2(APIView):
    def get(self, request):
        user_profiles = User.objects.all()
        serializer = UserSerializer(user_profiles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


'''

        
@csrf_exempt
# @login_required
class UserProfileView(TemplateView):
    template_name = 'user_profile.html'  # 你的模板文件路径，根据需要修改

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # 在这里添加你需要的用户信息查询
        context['user_data'] = self.request.user
        return context

'''
# -------------------------------------------->For CustomConfirmEmailView


class CustomConfirmEmailView(ConfirmEmailView):
    template_name = 'account/email/email_confirmation_signup_message.txt'  # 替换为你自己的模板路径

    def get(self, *args, **kwargs):
        # 自定义确认邮箱后的逻辑，例如设置用户状态等
        # 这里只是简单地重定向到用户账户页面，你可以根据需求进行修改
        return redirect('user_account')  # 替换为你自己的用户账户 URL


def user_account(request):

    return render(request, 'useraccount.html')

# -------------------------------------------->For CheckUserAPIView


class CheckUserAPIView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email', '')
        try:
            user = User.objects.get(email=email)
            return Response({'exists': True}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'exists': False}, status=status.HTTP_200_OK)


# -------------------------------------------->For UserApply

# For simplicity. Use a proper CSRF protection mechanism in production.
@csrf_exempt
def upload_file(request):
    if request.method == 'POST':
        uploaded_file = ""
        save_path = ""
        uploaded_images = request.FILES.getlist('uploadedImages')
        for idx, uploaded_image in enumerate(uploaded_images, start=1):
            # Extract the original file name and extension
            original_filename, extension = os.path.splitext(
                uploaded_image.name)
            # Generate a new filename with date prefix and index suffix
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            new_filename = f"{timestamp}_{original_filename}_image_{idx}{extension}"

            # uploaded_file = f"{uploaded_image}_image_{idx}.jpg"  # 生成唯一的文件名
            save_path = os.path.join(
                settings.MEDIA_ROOT, 'uploads', new_filename)

            # Save the file to the specified directory
            with open(save_path, 'wb+') as destination:
                for chunk in uploaded_image.chunks():
                    destination.write(chunk)

        return JsonResponse({'message': 'File uploaded successfully.', 'uploaded_file': uploaded_file, 'save_path': save_path})

    return JsonResponse({'error': 'Invalid request.'}, status=400)


@require_POST
def upload_user_apply(request):
    if request.method == 'POST':
        # uploaded_file = ""
        original_filename = ""
        new_filename = ""
        save_path = ""

        # 获取文本数据
        username = request.POST.get('username', '')
        email = request.POST.get('email', '')
        applytype = request.POST.get('applytype', '')
        requirements = request.POST.get('requirements', '')
        mainImageId = request.POST.get('mainImageId', 0)

        # 处理其他文本数据的逻辑...
        user_apply = UserApply.objects.create(
            username=username,
            email=email,
            apply_type=applytype,
            requirements=requirements,
            main_image_id=mainImageId
        )

        uploaded_images = request.FILES.getlist('uploadedImages')
        for idx, uploaded_image in enumerate(uploaded_images, start=0):
            # Extract the original file name and extension
            original_filename, extension = os.path.splitext(
                uploaded_image.name)
            # Generate a new filename with date prefix and index suffix
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            new_filename = f"{timestamp}_{original_filename}_image_{idx}{extension}"

            # uploaded_file = f"{uploaded_image}_image_{idx}.jpg"  # 生成唯一的文件名
            save_path = os.path.join(
                settings.MEDIA_ROOT, 'uploads', new_filename)

            # Save the file to the specified directory
            with open(save_path, 'wb+') as destination:
                for chunk in uploaded_image.chunks():
                    destination.write(chunk)
            new_image_path = f"image_path{idx}"
            user_apply.new_image_path = save_path
            user_apply.save()
        return JsonResponse({'message': 'Data uploaded successfully', 'original_filename': original_filename, 'new_filename': new_filename, 'save_path': save_path})

    return JsonResponse({'error': 'Invalid request.'}, status=400)


class UserApplyCreateView(generics.CreateAPIView):
    queryset = UserApply.objects.all()
    serializer_class = UserApplySerializer


class UserApplyListAPIView(generics.ListAPIView):
    # serializer_class = UserApplySerializer

    def get(self, request, *args, **kwargs):
        user_email = request.user.email
        user_apply = UserApply.objects.filter(email=user_email)
        serializer = UserApplySerializer(user_apply, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserApplyListAPIView2(generics.ListAPIView):
    queryset = UserApply.objects.all()
    serializer_class = UserApplySerializer


class UserApplyContentAPIView(generics.ListAPIView):
    # serializer_class = UserApplySerializer
    def get(self, request, id):
        # user_email = request.user.email
        user_apply = UserApply.objects.filter(id=id)
        serializer = UserApplySerializer(user_apply, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    '''
    def user_apply_content(request, apply_type):
    # user_applys = get_object_or_404(UserApply, apply_type=apply_type)
    user_applys = UserApply.objects.filter(apply_type=apply_type)
    serializer = UserApplySerializer(user_applys, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
    # return Response(user_applys, status=status.HTTP_200_OK)
    
    # If the entry does not exist, render an error page
    if content is None:
        # return HttpResponseNotFound(f"Page not found: {id}")
        return render(request, "encyclopedia/entrycontent.html", {
            "id": id.capitalize(),
            "content": f"Page not found: {id}",
        })

    # If the entry exists, render the entry page
    return render(request, "encyclopedia/entrycontent.html", {
        "id": id.capitalize(),
        "content": content_html,
    })
    '''

# -------------------------------------------->For Receive_data


@csrf_exempt
def Receive_data(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        received_data = data.get('data')
        # 在这里将数据存入MySQL数据库
        # 示例代码：假设你有一个名为DataModel的模型
        # DataModel.objects.create(data=received_data)
        return JsonResponse({'message': 'Hank Says:Data received and saved OK!'})
    return JsonResponse({'error': 'Invalid request method.'})


@csrf_exempt
def Receive_data2(request):
    return JsonResponse({'message': 'Hank2 Says:Data received and saved OK!'})

# -------------------------------------------->For register


@csrf_exempt
def Register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data['email']
        password = data['password']

        datajson = {'data': data, 'email': email, 'password': password}
        dataok = {'message': f'Successful register', 'status': 'success'}
        datano = {'message': f'Invalid register', 'status': 'error'}

        combined_dataok = {'dataok ': dataok, 'datajson': datajson}
        combined_datano = {'datano ': datano}
        return JsonResponse(combined_dataok)
        '''
        try:
            # user = User.objects.create_user(email=email, password=password)
            user = User.objects.create(
                # username='hankchenv@gmail.com', password='1234')
                email=email, password=password)
            user.save()
            # If the save is successful, return a success response.
            return HttpResponse("User created successfully")
        except Exception as e:
            # Log the error for debugging purposes.
            print(f"Error creating user: {str(e)}")
            # Return an error response, such as a 500 Internal Server Error.
            return HttpResponseServerError("Internal Server Error")

        if user:
            return JsonResponse(combined_dataok)
        else:
            return JsonResponse(combined_datano)
        '''


@csrf_exempt
def Register2(request):
    if request.method == 'POST':

        email = 'choose_last@163.com'
        password = 'password123'

        datajson = {'email': email, 'password': password}
        dataok = {'message': f'Successful register', 'status': 'success'}
        datano = {'message': f'Invalid register', 'status': 'error'}

        combined_dataok = {'dataok ': dataok, 'datajson': datajson}
        combined_datano = {'datano ': datano}
        return JsonResponse(combined_dataok)


@csrf_exempt
class CreateUserView(APIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@login_required
def profile(request):
    return render(request, 'profile.html')


def index(request):
    '''
    context = {
        'STATIC_ROOT': settings.STATIC_ROOT,
        'STATIC_URL': settings.STATIC_URL,
    }


    static_root = settings.STATIC_ROOT
    static_url = settings.STATIC_URL
    '''
    return render(request, 'index.html')


def pd(request):
    return render(request, 'pd.html')


def qwb(request):
    return render(request, 'qwb.html')


def cbs(request):
    return render(request, 'cbs.html')


def pi(request):
    return render(request, 'pi.html')


def fi(request):
    return render(request, 'fi.html')


def fe(request):
    return render(request, 'fe.html')


def sh(request):
    return render(request, 'sh.html')


def wfd(request):
    return render(request, 'wfd.html')


def wfflask(request):
    return render(request, 'wfflask.html')


def wfspringboot(request):
    return render(request, 'wfspringboot.html')


def wfflutter(request):
    return render(request, 'wfflutter.html')


def wffastapi(request):
    return render(request, 'wffastapi.html')


def dbmongodb(request):
    return render(request, 'dbmongodb.html')


def dbpostgresql(request):
    return render(request, 'dbpostgresql.html')


def dboracle(request):
    return render(request, 'dboracle.html')


def dbsqlsever(request):
    return render(request, 'dbsqlsever.html')


def dbmysql(request):
    return render(request, 'dbmysql.html')


def fdreact(request):
    return render(request, 'fdreact.html')


def fdtypescript(request):
    return render(request, 'fdtypescript.html')


def fdjavascript(request):
    return render(request, 'fdjavascript.html')


def fdhtml(request):
    return render(request, 'fdhtml.html')


def fdbootstrap(request):
    return render(request, 'fdbootstrap.html')


def fdscss(request):
    return render(request, 'fdscss.html')


def bdnotejs(request):
    return render(request, 'bdnotejs.html')


def bdphp(request):
    return render(request, 'bdphp.html')


def bdpython(request):
    return render(request, 'bdpython.html')


def bdc(request):
    return render(request, 'bdc.html')


def bdjava(request):
    return render(request, 'bdjava.html')


def tgit(request):
    return render(request, 'tgit.html')


def tnginx(request):
    return render(request, 'tnginx.html')


def tdocker(request):
    return render(request, 'tdocker.html')


def aboutus(request):
    return render(request, 'aboutus.html')


def contactus(request):
    return render(request, 'contactus.html')


def faqs(request):
    return render(request, 'faqs.html')


# 在你的应用的 views.py 中

'''
def CustomUserProfileView(request):
    if request.user.is_authenticated:
        email_address = EmailAddress.objects.get(
            user=request.user, verified=True)
        if email_address:
            # 邮箱已验证
            return render(request, 'useraccount.html')
        else:
            # 邮箱未验证
            return render(request, 'useraccountno.html')
    else:
        # 用户未登录
        return render(request, 'index.html')


'''
