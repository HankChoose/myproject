from django.contrib import admin
from django.urls import include, path
from allauth.account.views import LoginView, LogoutView, SignupView, PasswordChangeView

from . import views
from .views import UserAccountView, UserDemandCreateView, UserDemandCreateView2, UserDemandCreateView3, CheckUserAPIView, CustomConfirmEmailView
from .views import index, send_confirmation_email, react_user_profile, Receive_data, Receive_data2, Register, Register2, CheckEmailExistView
from .views import pd, qwb, cbs, pi, fi, fe, sh, wfd, wffastapi, wfflutter, wfspringboot, wfflask, dbmysql, dbsqlsever, dboracle, dbpostgresql, dbmongodb, fdscss, fdbootstrap, fdhtml, fdjavascript, fdtypescript, fdreact, bdjava, bdc, bdpython, bdphp, bdnotejs, tdocker, tnginx, tgit, faqs, contactus, aboutus

from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

app_name = 'django_project'

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", index, name="index"),
    path('encyclopedia/', include("encyclopedia.urls")),
    path('accounts/', include('allauth.urls')),


    path('react/userprofile/', views.react_user_profile, name='react_user_profile'),
    path('user-account/', UserAccountView.as_view(), name='user_account'),

    path('send-confirmation-email/', send_confirmation_email,
         name='send_confirmation_email'),

    path('custom-confirm-email/<str:key>/',
         CustomConfirmEmailView.as_view(), name='custom_confirm_email'),


    # path('accounts/userprofile/', CustomUserProfileView,name='accounts_user_profile'),
    path('api/check-email-exist/<str:email>/',
         CheckEmailExistView, name='check_email_exist'),
    path('api/check_user/', CheckUserAPIView.as_view(), name='check_user'),

    path('user-demand-create/', UserDemandCreateView.as_view(),
         name='user_demand_create'),
    path('user-demand-create2/', UserDemandCreateView2,
         name='user_demand_create2'),
    path('user-demand-create3/', UserDemandCreateView3,
         name='user_demand_create3'),

    path('receive-data/', Receive_data, name='receive_data'),
    path('receive-data2/', Receive_data2, name='receive_data2'),

    path('register/', Register, name='register'),
    path('register2/', Register2, name='register2'),

    path('accounts/signup/', SignupView.as_view(),
         name='account_signup'),
    path('accounts/login/', LoginView.as_view(), name='account_login'),
    path('accounts/logout/', LogoutView.as_view(), name='account_logout'),
    path('accounts/password/change/', PasswordChangeView.as_view(),
         name='account_change_password'),
    # path('accounts/profile/', profile_view, name='account_profile'),
    path("pd/", pd, name="pd"),
    path("qwb/", qwb, name="qwb"),
    path("cbs/", cbs, name="cbs"),
    path("pi/", pi, name="pi"),
    path("fi/", fi, name="fi"),
    path("fe/", fe, name="fe"),
    path("sh/", sh, name="sh"),
    path("wfd/", wfd, name="wfd"),
    path("wffastapi/", wffastapi, name="wffastapi"),
    path("wfflutter/", wfflutter, name="wfflutter"),
    path("wfspringboot/", wfspringboot, name="wfspringboot"),
    path("wfflask/", wfflask, name="wfflask"),
    path("dbmysql/", dbmysql, name="dbmysql"),
    path("dbsqlsever/", dbsqlsever, name="dbsqlsever"),
    path("dboracle/", dboracle, name="dboracle"),
    path("dbpostgresql/", dbpostgresql, name="dbpostgresql"),
    path("dbmongodb/", dbmongodb, name="dbmongodb"),
    path("fdscss/", fdscss, name="fdscss"),
    path("fdbootstrap/", fdbootstrap, name="fdbootstrap"),
    path("fdhtml/", fdhtml, name="fdhtml"),
    path("fdjavascript/", fdjavascript, name="fdjavascript"),
    path("fdtypescript/", fdtypescript, name="fdtypescript"),
    path("fdreact/", fdreact, name="fdreact"),
    path("bdjava/", bdjava, name="bdjava"),
    path("bdc/", bdc, name="bdc"),
    path("bdpython/", bdpython, name="bdpython"),
    path("bdphp/", bdphp, name="bdphp"),
    path("bdnotejs/", bdnotejs, name="bdnotejs"),
    path("tdocker/", tdocker, name="tdocker"),
    path("tnginx/", tnginx, name="tnginx"),
    path("tgit/", tgit, name="tgit"),
    path("faqs/", faqs, name="faqs"),
    path("contactus/", contactus, name="contactus"),
    path("aboutus/", aboutus, name="aboutus"),


]
