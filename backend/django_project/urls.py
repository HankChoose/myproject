from django.contrib import admin
from django.urls import include, path
from allauth.account.views import LoginView, LogoutView, SignupView, PasswordChangeView, PasswordResetView
from .views import UserApplyContentAPIView, UserProfileView, UserProfileView2, UserApplyCreateView, UserApplyListAPIView, UserApplyListAPIView2, CheckUserAPIView, CustomConfirmEmailView, UserTokenView
from . import views
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt


app_name = 'django_project'

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.index, name="index"),
    path('encyclopedia/', include("encyclopedia.urls")),
    path('accounts/', include('allauth.urls')),


    path('check-verification-status2/',
         views.check_verification_status, name='check_verification_status'),
    path('resend-verification-email/',
         views.resend_verification_email, name='resend_verification_email'),

    path('user-profile/', UserProfileView.as_view(), name='user_profile'),
    path('user-profile2/', UserProfileView2.as_view(), name='user_profile2'),
    path('user-token/',  UserTokenView.as_view(), name='user_token'),
    path('user-account/',  views.user_account, name='user_account'),
    path('user-change-username/', views.user_change_username,
         name='user_change_username'),
    path('custom-confirm-email/<str:key>/',
         CustomConfirmEmailView.as_view(), name='custom_confirm_email'),

    # path('accounts/userprofile/', views.CustomUserProfileView,name='accounts_user_profile'),
    path('check-email-exist/<str:email>/',
         views.CheckEmailExistView, name='check_email_exist'),
    path('get-image/<str:image_info>/', views.get_image, name='get_image'),
    path('check_user/', CheckUserAPIView.as_view(), name='check_user'),

    path('upload/', views.upload_file, name='upload_file'),
    path('upload2/', views.upload_file2, name='upload_file2'),
    path('upload-user-apply/', views.upload_user_apply, name='upload_user_apply'),
    path('user-apply-create/', UserApplyCreateView.as_view(),
         name='user_apply_create'),
    path('user-apply-list/', UserApplyListAPIView.as_view(),
         name='user_apply_list'),
    path('user-apply-list2/', UserApplyListAPIView2.as_view(),
         name='user_apply_list2'),

    path("user-apply-content/<int:id>",
         UserApplyContentAPIView.as_view(), name="user_apply_content"),


    path('receive-data/', views.Receive_data, name='receive_data'),
    path('receive-data2/', views.Receive_data2, name='receive_data2'),

    path('register/', views.Register, name='register'),
    path('register2/', views.Register2, name='register2'),

    path('accounts/signup/', SignupView.as_view(),
         name='account_signup'),
    path('accounts/login/', LoginView.as_view(), name='account_login'),
    path('accounts/logout/', LogoutView.as_view(), name='account_logout'),

    path('accounts/password/reset/', PasswordResetView.as_view(),
         name='account_reset_password'),
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
