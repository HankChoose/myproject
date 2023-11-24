from django.db import models


class Book3(models.Model):
    title3 = models.CharField(max_length=100)
    author3 = models.CharField(max_length=100)
    publication_date = models.DateField()


class Book4(models.Model):
    title4 = models.CharField(max_length=100)
    author4 = models.CharField(max_length=100)
    publication_date = models.DateField()
