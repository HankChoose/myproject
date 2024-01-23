from django.db import models
from django.utils import timezone
from django.template.defaultfilters import linebreaks


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

    def formatted_requirements(self):
        return linebreaks(self.requirements)

    def __str__(self):
        return self.username


class UserApplyAsk(models.Model):
    # 使用AutoField定义自动增长的ID字段
    # id = models.AutoField(primary_key=True)

    username = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=255)
    apply_type = models.CharField(max_length=255)
    askInfo = models.TextField()
    # apply_time = models.DateTimeField(
    # default=timezone.now, blank=True)
    ask_time = models.DateTimeField(
        default=timezone.localtime, blank=True
    )
    comment = models.TextField(default='default comment')
    comment2 = models.TextField(default='default comment2')

    def __str__(self):
        return self.username


class Book3(models.Model):
    title3 = models.CharField(max_length=100)
    author3 = models.CharField(max_length=100)
    publication_date = models.DateField()


class Book4(models.Model):
    title4 = models.CharField(max_length=100)
    author4 = models.CharField(max_length=100)
    publication_date = models.DateField()
