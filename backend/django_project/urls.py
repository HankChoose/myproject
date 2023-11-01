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
    path('encyclopedia/', include("encyclopedia.urls")),
    # path('register', views.CreateUserView, name="CreateUserView"),
    path('send-data/', views.Register, name='Register'),
    path("", views.index, name="index"),
    path("pd/", views.pd, name="pd"),
    path("qwb/", views.qwb, name="qwb"),
    path("cbs/", views.cbs, name="cbs"),
    path("pi/", views.pi, name="pi"),
    path("fi/", views.fi, name="fi"),
    path("fe/", views.fe, name="fe"),
    path("sh/", views.sh, name="sh"),
    path("wfd/", views.wfd, name="wfd"),
    path("wffastapi/", views.wffastapi, name="wffastapi"),
    path("wfflutter/", views.wfflutter, name="wfflutter"),
    path("wfspringboot/", views.wfspringboot, name="wfspringboot"),
    path("wfflask/", views.wfflask, name="wfflask"),
    path("dbmysql/", views.dbmysql, name="dbmysql"),
    path("dbsqlsever/", views.dbsqlsever, name="dbsqlsever"),
    path("dboracle/", views.dboracle, name="dboracle"),
    path("dbpostgresql/", views.dbpostgresql, name="dbpostgresql"),
    path("dbmongodb/", views.dbmongodb, name="dbmongodb"),
    path("fdscss/", views.fdscss, name="fdscss"),
    path("fdbootstrap/", views.fdbootstrap, name="fdbootstrap"),
    path("fdhtml/", views.fdhtml, name="fdhtml"),
    path("fdjavascript/", views.fdjavascript, name="fdjavascript"),
    path("fdtypescript/", views.fdtypescript, name="fdtypescript"),
    path("fdreact/", views.fdreact, name="fdreact"),
    path("bdjava/", views.bdjava, name="bdjava"),
    path("bdc/", views.bdc, name="bdc"),
    path("bdpython/", views.bdpython, name="bdpython"),
    path("bdphp/", views.bdphp, name="bdphp"),
    path("bdnotejs/", views.bdnotejs, name="bdnotejs"),
    path("tdocker/", views.docker, name="tdocker"),
    path("tnginx/", views.tnginx, name="tnginx"),
    path("tgit/", views.tgit, name="tgit"),


]
