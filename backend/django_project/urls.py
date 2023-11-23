from django.contrib import admin
from django.urls import include, path
from allauth.account.views import LoginView, LogoutView, SignupView, PasswordChangeView
from .views import get_user_data, CustomUserProfileView, CheckUserAPIView, CustomConfirmEmailView
from . import views
from django.urls import reverse

from django.views.decorators.csrf import csrf_exempt

app_name = 'django_project'

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.index, name="index"),
    path('accounts/', include('allauth.urls')),
    path('encyclopedia/', include("encyclopedia.urls")),

    path('accounts/userprofile/', views.CustomUserProfileView,
         name='accounts_user_profile'),
    path('api/check-email-exist/<str:email>/',
         views.CheckEmailExistView, name='check_email_exist'),
    path('user-account/',  views.user_account_view, name='userAccount'),
    path('api/user/', views.get_user_data, name='get_user_data')
    path('create/', views.UserDemandCreateView, name='create-demand'),
    path('create2/', views.UserDemandCreateView2, name='create-demand2'),
    path('create3/', views.UserDemandCreateView3, name='create-demand3'),
    path('receive_data/', views.Receive_data, name='receive_data'),
    path('receive_data2/', views.Receive_data2, name='receive_data2'),
    path('send-data/', views.Register, name='register'),
    path('send-data2/', views.Register2, name='register2'),

    path('custom-confirm-email/<str:key>/',
         CustomConfirmEmailView.as_view(), name='custom_confirm_email'),
    path('api/check_user/', CheckUserAPIView.as_view(), name='check_user'),
    path('accounts/signup/', SignupView.as_view(), name='account_signup'),
    path('accounts/login/', LoginView.as_view(), name='account_login'),
    path('accounts/logout/', LogoutView.as_view(), name='account_logout'),
    path('accounts/password/change/', PasswordChangeView.as_view(),
         name='account_change_password'),
    # path('accounts/profile/', views.profile_view, name='account_profile'),
    # path('accounts/profile/', views.profile, name="profile"),
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
