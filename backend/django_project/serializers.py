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


class UserApplyMianSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserApply
        fields = ['id', 'apply_type', 'requirements', 'username',
                  'email', 'apply_time', 'comment', 'comment2']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        main_image_id = instance.main_image_id

        # Conditionally include one of the image_path fields based on main_image_id
        if main_image_id == 0:
            data['image_path_mian'] = instance.image_path0
        elif main_image_id == 1:
            data['image_path_mian'] = instance.image_path1
        elif main_image_id == 2:
            data['image_path_mian'] = instance.image_path2

        return data
