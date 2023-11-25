from rest_framework import serializers
# from .models import User
from .models import UserDemand
# Adjust the import based on your User model
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')  # 根据需要选择要包含的字段


'''
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
'''


class UserDemandSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDemand
        fields = '__all__'
