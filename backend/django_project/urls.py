"""
URL configuration for django_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from . import views
from allauth.account.views import SignupView, LoginView, LogoutView
from django.views.generic import TemplateView
from django.conf.urls import url
from .views import CustomSignupView

urlpatterns = [

    path('admin/', admin.site.urls),
    path("", views.index, name="index"),
    path('accounts/', include('allauth.urls')),
    path('accounts/signup/', SignupView.as_view(), name='account_signup'),
    path('accounts/login/', LoginView.as_view(), name='account_login'),
    path('accounts/logout/', LogoutView.as_view(), name='account_logout'),
    path('api/signup/', CustomSignupView.as_view(), name='api_signup'),
    # url(r'^accounts/signup/',
    # 'mainapp.signup_views.signup_view', name='account_signup'),
    # url(r'^accounts/', include('allauth.urls')),
    path('accounts/profile/', views.profile, name="profile"),

    path('encyclopedia/', include("encyclopedia.urls")),
    # path('register', views.CreateUserView, name="CreateUserView"),
    path('send-data/', views.Register, name='Register'),
    # path('send_test_email/', views.send_test_email, name='send_test_email'),
]
