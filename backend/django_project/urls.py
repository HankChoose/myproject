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


urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('accounts/signup/', SignupView.as_view(), name='account_signup'),
    path('accounts/login/', LoginView.as_view(), name='account_login'),
    path('accounts/logout/', LogoutView.as_view(), name='account_logout'),

    path('custom-login/', TemplateView.as_view(template_name='account/login.html'),
         name='custom_login'),  # 您的自定义登录页面
    path('custom-signup/', TemplateView.as_view(template_name='account/signup.html'),
         name='custom_signup'),  # 您的自定义注册页面
    # path('accounts/profile/', views.profile_view, name='account_profile'),

    path('accounts/profile/', views.profile, name="profile"),
    # path("", views.index, name="index"),
    path('encyclopedia/', include("encyclopedia.urls")),
    # path('register', views.CreateUserView, name="CreateUserView"),
    # path('send-data/', views.Register, name='Register'),
    # path('send_test_email/', views.send_test_email, name='send_test_email'),
]
