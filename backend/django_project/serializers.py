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
    formatted_requirements = serializers.ReadOnlyField()

    class Meta:
        model = UserApply
        fields = '__all__'


class UserApplyMianSerializer(serializers.ModelSerializer):
    image_path_main = serializers.SerializerMethodField()

    def get_image_path_main(self, obj):
        main_image_id = obj.main_image_id

        if main_image_id == 0:
            return obj.image_path0
        elif main_image_id == 1:
            return obj.image_path1
        elif main_image_id == 2:
            return obj.image_path2
        else:
            # 如果没有匹配的值，返回默认路径或者其他适当的值
            return 'defaultPath.png'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Format the apply_time before returning the representation
        representation['apply_time'] = instance.apply_time.strftime(
            '%Y-%m-%d %H:%M:%S')
        return representation

    class Meta:
        model = UserApply
        fields = '__all__'
