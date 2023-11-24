from django.db import models


class User(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.email


class User2(models.Model):
    email2 = models.EmailField(unique=True)
    password2 = models.CharField(max_length=128)

    def __str__(self):
        return self.email


class UserDemand(models.Model):
    username = models.CharField(max_length=255)
    email = models.EmailField()
    demand_type = models.CharField(max_length=255)
    demand_description = models.TextField()

    def __str__(self):
        return self.username
