"""
Django settings for django_project project.

Generated by 'django-admin startproject' using Django 5.0.

For more information on this file, see
https://docs.djangoproject.com/en/dev/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/dev/ref/settings/
"""
import os
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'filename': '/var/log/django_hank_request.log',  # 修改为实际的日志文件路径
        },
    },
    'loggers': {
        'django.request': {
            'handlers': ['file'],
            'level': 'DEBUG',
            'propagate': True,
        },
    },
}

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/dev/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-pug#t6-2ups3a1ujjn17a&p!y=ac2d-8*1g2w)ox-vcem$dn=u'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

APPEND_SLASH = False

ALLOWED_HOSTS = ['*']
# ALLOWED_HOSTS = ['zhiyouyuec.com']

# Set the secure proxy header
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Set the secure cookie flag
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_SSL_REDIRECT = True

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Application definition

INSTALLED_APPS = [
    'django_project',
    'encyclopedia',
    'corsheaders',
    'rest_framework',
    'djoser',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',  # 如果你想使用Google登录
    'allauth.socialaccount.providers.github',
    'django.contrib.sites',  # 如果使用django-allauth
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

SITE_ID = 1

CORS_ALLOWED_ORIGINS = [
    "*",
]


AUTHENTICATION_BACKENDS = (
    # django admin所使用的用户登录与django-allauth无关
    'django.contrib.auth.backends.ModelBackend',

    # allauth 身份验证
    'allauth.account.auth_backends.AuthenticationBackend',
)

AUTHENTICATION_CLASSES = (
    'allauth.account.auth_backends.AuthenticationBackend',
)

# 配置邮件发送
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'zhiyouyuec@gmail.com'  # 你的163账号和授权码
EMAIL_HOST_PASSWORD = 'lawr wxds ovuc gpik'
EMAIL_USE_TLS = True  # 这里必须是 True，否则发送不成功
EMAIL_FROM = 'zhiyouyuec@gmail.com'  # 发送人 你的 163账号

# 默认显示的发送人，（邮箱地址必须与发送人一致），不设置的话django默认使用的webmaster@localhost
DEFAULT_FROM_EMAIL = 'zhiyouyuec@gmail.com'

# 在这里设置您的登录和注册视图，以便它们指向您的React页面
LOGIN_URL = 'your-login-url'  # 替换为您的登录页面URL
LOGOUT_URL = 'your-logout-url'  # 替换为您的注销URL
# 设置登录和注册成功后重定向的页面，默认是 "/accounts/profile/"
LOGIN_REDIRECT_URL = '/accounts/profile/'

# ACCOUNT

# 指定要使用的登录方法(用户名、电子邮件地址两者之一)'username_email'，'email'
# ACCOUNT_AUTHENTICATION_METHOD ="username" | "email" | "username_email"
ACCOUNT_AUTHENTICATION_METHOD = 'email'
# 要求用户注册时必须填写email
ACCOUNT_EMAIL_REQUIRED = True

# 如果ACCOUNT_EMAIL_VERIFICATION = 'mandatory' ，用户必须通过邮箱验证后才能登陆 如果你不需要邮箱验证，只需要设置
# 作用于第三方账号的注册
# ACCOUNT_EMAIL_VERIFICATION = 'none'
# SOCIALACCOUNT_EMAIL_VERIFICATION = 'optional' / 'mandatory' / 'none'
# ACCOUNT_EMAIL_VERIFICATION ="optional"

# 如ACCOUNT_EMAIL_VERIFICATION = 'mandatory'
ACCOUNT_EMAIL_VERIFICATION = 'mandatory'  # 强制邮箱验证
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_UNIQUE_EMAIL_CONFIRMATION = True
ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = LOGIN_URL
ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = LOGIN_REDIRECT_URL

# 邮件发送后的冷却时间(以秒为单位
ACCOUNT_EMAIL_CONFIRMATION_COOLDOWN = 360
# 邮箱确认邮件的截止日期(天数
ACCOUNT_EMAIL_CONFIRMATION_EXPIRE_DAYS = 3

# 登录尝试失败的次数
ACCOUNT_LOGIN_ATTEMPTS_LIMIT = 5
# 从上次失败的登录尝试，用户被禁止尝试登录的持续时间
ACCOUNT_LOGIN_ATTEMPTS_TIMEOUT = 300
# 更改为True，用户一旦确认他们的电子邮件地址，就会自动登录
ACCOUNT_LOGIN_ON_EMAIL_CONFIRMATION = False

# 更改或设置密码后是否自动退出
ACCOUNT_LOGOUT_ON_PASSWORD_CHANGE = False
# 更改为True，用户将在重置密码后自动登录
ACCOUNT_LOGIN_ON_PASSWORD_RESET = False
# 控制会话的生命周期，可选项还有: "False" 和 "True"
ACCOUNT_SESSION_REMEMBER = None

# 用户注册时是否需要输入邮箱两遍
ACCOUNT_SIGNUP_EMAIL_ENTER_TWICE = False
# 用户注册时是否需要用户输入两遍密码
ACCOUNT_SIGNUP_PASSWORD_ENTER_TWICE = True
# 用户不能使用的用户名列表
ACCOUNT_USERNAME_BLACKLIST = []
# 用户名允许的最小长度的整数
ACCOUNT_USERNAME_MIN_LENGTH = 1
# 使用从社交账号提供者检索的字段(如用户名、邮件来绕过注册表单
SOCIALACCOUNT_AUTO_SIGNUP = True


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'allauth.account.middleware.AccountMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ALLOWED_ORIGINS = [
    "https://zhiyouyuec.com",
]

ROOT_URLCONF = 'django_project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        # 'DIRS': [os.path.join(BASE_DIR, 'frontend', 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'django_project.wsgi.application'


# Database
# https://docs.djangoproject.com/en/dev/ref/settings/#databases

'''
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

'''
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mydb',
        'USER': 'myuser',
        'PASSWORD': 'mypw',
        # 'PASSWORD': 'myrootpw',
        # Docker Compose中MySQL服务的主机名
        'HOST': 'myproject-mysql',
        'PORT': '3306',  # MySQL默认端口

    }
}


# Password validation
# https://docs.djangoproject.com/en/dev/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/dev/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/dev/howto/static-files/

STATIC_URL = '/static/'
# STATICFILES_DIRS = [os.path.join(BASE_DIR, 'frontend', 'build', 'static')]

# Default primary key field type
# https://docs.djangoproject.com/en/dev/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
