from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# from .models import User
from django.contrib.auth.models import User
from django.http import HttpResponseServerError
from django.http import JsonResponse
from django.http import HttpResponse
from django.db import connection
from django.shortcuts import render, redirect
from django.contrib import messages
from django.conf import settings

from django.views.decorators.csrf import csrf_exempt
from .serializers import UserSerializer
import json


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

        try:
            # user = User.objects.create_user(email=email, password=password)
            user = User.objects.create(
                username='hankchenv@gmail.com', password='1234')
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
