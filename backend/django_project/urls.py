from django.contrib import admin
from django.urls import include, path
from allauth.account.views import LoginView, LogoutView, SignupView, PasswordChangeView
from . import views
from .views import UserDemandCreateView
from .views import CheckUserAPIView
from .views import check_email_exist
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.index, name="index"),
    path('encyclopedia/', include("encyclopedia.urls")),
    path('create/', csrf_exempt(UserDemandCreateView.as_view()), name='create-demand'),
    path('api/check-email-exist/<str:email>/',
         csrf_exempt(check_email_exist), name='check_email_exist'),
    path('api/check_user/', csrf_exempt(CheckUserAPIView.as_view()), name='check_user'),
    path('accounts/', include('allauth.urls')),
    path('accounts/login/', csrf_exempt(LoginView.as_view()), name='account_login'),
    path('accounts/logout/', csrf_exempt(LogoutView.as_view()),
         name='account_logout'),
    path('accounts/signup/', csrf_exempt(SignupView.as_view()),
         name='account_signup'),
    path('accounts/password/change/', csrf_exempt(PasswordChangeView.as_view()),
         name='account_change_password'),
    # path('accounts/profile/', views.profile_view, name='account_profile'),
    # path('accounts/profile/', views.profile, name="profile"),
    # path('register', views.CreateUserView, name="CreateUserView"),
    # path('send-data/', views.Register, name='Register'),
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
    path("tdocker/", views.tdocker, name="tdocker"),
    path("tnginx/", views.tnginx, name="tnginx"),
    path("tgit/", views.tgit, name="tgit"),
    path("faqs/", views.faqs, name="faqs"),
    path("contactus/", views.contactus, name="contactus"),
    path("aboutus/", views.aboutus, name="aboutus"),


]
