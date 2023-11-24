from rest_framework import serializers
from .models import User
from .models import UserDemand
# Adjust the import based on your User model
from django.contrib.auth.models import User


class UserDemandSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDemand
        fields = '__all__'
