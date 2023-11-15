from .models import User
from .models import UserDemand

import json
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponseServerError
from django.http import HttpResponse
from django.db import connection
from django.shortcuts import render, redirect
from django.contrib import messages
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSerializer
from .serializers import UserDemandSerializer

from allauth.account.views import LoginView, SignupView, PasswordChangeView


# ------------------------------------------------------------>Check exists email


def check_email_exist(request, email):
    from django.contrib.auth.models import User
    exists = User.objects.filter(email=email).exists()
    return JsonResponse({'exists': exists})


class CheckUserAPIView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email', '')
        try:
            user = User.objects.get(email=email)
            return Response({'exists': True}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'exists': False}, status=status.HTTP_200_OK)

# ------------------------------------------------------------>For UserDemand


@csrf_exempt
class UserDemandCreateView(generics.CreateAPIView):
    queryset = UserDemand.objects.all()
    serializer_class = UserDemandSerializer


@csrf_exempt
def UserDemandCreateView2(request):
    if request.method == 'POST':
        # Retrieve POST data
        username = request.POST.get('username')
        email = request.POST.get('email')
        demand_type = request.POST.get('demand_type')
        demand_description = request.POST.get('demand_description')

        # Process the data as needed (e.g., save to database)
        # ...

        # Return a response (e.g., a success message)
        response_content = f'Success! Data received and processed. Username: {username}, Email: {email}, Demand Type: {demand_type}, Demand Description: {demand_description}'
        return HttpResponse(response_content)
    else:
        # Handle other HTTP methods (GET, etc.) or render a form
        return render(request, 'your_template.html')


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


@csrf_exempt
class CreateUserView(APIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
        # return JsonResponse(combined_dataok)
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
