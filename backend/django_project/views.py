from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer

import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.http import HttpResponse
from django.db import connection
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User
from django.conf import settings

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
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

        '''
        key1 = data1['key1']
        key2 = data1['key2']
        email1 = data1['email']
        password1 = data1['password']
        data2 = json.loads(request.body.decode('utf-8'))
        email2 = data2['email']
        password2 = data2['password']
        data2json = {'data2': data2,
                     'email2': data2['email'], 'password2': data2['password']}
        data1json = {'data1': data1, 'email1': email1, 'password1': password1}
        '''
        datajson = {'data': data, 'email': email, 'password': password}
        # data1json = {'data1': data1, 'key1': key1, 'key2': key2}
        # comnined_data_info = {'message': f'Successful register'}
        comnined_data = {'data1json': datajson}
        return JsonResponse(comnined_data)

        '''
        user = User(email=email, password=password)
        ser.save()

        if user:
            return JsonResponse({'message': f'Successful register', 'status': 'success'})
        else:
            return JsonResponse({'message': f'Invalid register', 'status': 'error'})
        '''


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
