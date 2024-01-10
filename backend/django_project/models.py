from django.db import models
from django.utils import timezone


class User1(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.email


class User2(models.Model):
    email2 = models.EmailField(unique=True)
    password2 = models.CharField(max_length=128)

    def __str__(self):
        return self.email


class UserApply(models.Model):
    # 使用AutoField定义自动增长的ID字段
    # id = models.AutoField(primary_key=True)

    username = models.CharField(max_length=255)
    email = models.EmailField()
    apply_type = models.CharField(max_length=255)
    requirements = models.TextField()
    main_image_id = models.IntegerField()
    image_path0 = models.CharField(
        max_length=555, default='defaultList.png')
    image_path1 = models.CharField(
        max_length=555, default='defaultList.png')
    image_path2 = models.CharField(
        max_length=555, default='defaultList.png')
    # apply_time = models.DateTimeField(
    # default=timezone.now, blank=True)
    apply_time = models.DateTimeField(
        default=timezone.localtime, blank=True
    )
    comment = models.TextField(default='default comment')
    comment2 = models.TextField(default='default comment2')

    def __str__(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'apply_type': self.apply_type,
            'requirements': self.requirements,
            'main_image_id': self.main_image_id,
            'image_path0': self.image_path0,
            'image_path1': self.image_path1,
            'image_path2': self.image_path2,
            'apply_time': self.apply_time,
            'comment': self.comment,
            'comment2': self.comment2,
        }


class Book3(models.Model):
    title3 = models.CharField(max_length=100)
    author3 = models.CharField(max_length=100)
    publication_date = models.DateField()


class Book4(models.Model):
    title4 = models.CharField(max_length=100)
    author4 = models.CharField(max_length=100)
    publication_date = models.DateField()
