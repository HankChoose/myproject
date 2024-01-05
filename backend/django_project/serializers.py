from rest_framework import serializers
# from .models import User
from .models import UserApply
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


class UserApplySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserApply
        fields = '__all__'
