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

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    # path('accounts/profile/', views.profile_view, name='account_profile'),
    path('accounts/profile/', views.profile, name="profile"),
    path("", views.index, name="index"),
    path('encyclopedia/', include("encyclopedia.urls")),
    # path('register', views.CreateUserView, name="CreateUserView"),
    path('send-data/', views.Register, name='Register'),
    path('@vite/client/', views.vite_client_handler, name='vite_client'),
    path('@react-refresh/', views.react_refresh_handler, name='react_refresh'),
]
