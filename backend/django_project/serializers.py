from rest_framework import serializers
from .models import User
from .models import UserDemand


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserDemandSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDemand
        fields = '__all__'
