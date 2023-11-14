from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User


class MyViewTests(TestCase):

    def setUp(self):
        # 在每个测试用例开始前执行的设置，例如创建测试数据库对象等
        # pass

        # 在每个测试用例开始前设置一些初始数据
        self.home_url = reverse('index')
        self.login_url = reverse('/accounts/login/')
        self.signup_url = reverse('/accounts/signup/')

        self.username = 'testuser'
        self.password = 'testpassword'

        self.username_invalid = 'testuserinvalid'
        self.password_invalid = 'testpasswordinvalid'

        self.username_new = 'testusernew'
        self.password_new = 'testpasswordnew'
        self.password2_new = 'testpasswordnew'
        self.user = User.objects.create_user(
            username=self.username, password=self.password)

    def tearDown(self):
        # 在每个测试用例结束后执行的清理操作
        pass

    def test_signup_view(self):
        # 测试注册页面是否返回200 OK
        response = self.client.get(self.signup_url)
        self.assertEqual(response.status_code, 200)

        # 测试使用有效数据注册用户是否成功
        data = {'username': self.username_new,
                'password1': self.password_new, 'password2': self.password2_new}
        response = self.client.post(self.signup_url, data)
        self.assertRedirects(response, self.login_url)

    def test_login_view_get(self):
        # 测试GET请求是否返回正确的状态码
        response = self.client.get(self.login_url)
        self.assertEqual(response.status_code, 200)

    def test_login_view_post_valid_credentials(self):
        # 测试POST请求使用有效凭据是否会成功登录用户
        data = {'username': self.username, 'password': self.password}
        response = self.client.post(self.login_url, data)
        self.assertEqual(response.status_code, 302)  # 302表示重定向，可以根据你的实际情况调整
        self.assertRedirects(response, self.home_url)

    def test_login_view_post_invalid_credentials(self):
        # 测试POST请求使用无效凭据是否会返回错误消息
        data = {'username': self.username_invalid,
                'password': self.password_invalid}
        response = self.client.post(self.login_url, data)
        self.assertEqual(response.status_code, 200)  # 登录失败应该返回相同的登录页面
        self.assertContains(
            response, 'Invalid username or password')  # 检查是否包含错误消息
    '''
    def test_contains_01(self):
        # 创建一个测试用的URL
        url = reverse('Register')

        # 模拟GET请求
        response = self.client.get(url)

        # 检查响应状态码
        self.assertEqual(response.status_code, 200)

        # 检查响应内容
        self.assertContains(response, "Hello, world!")

    def test_templateUsed_02(self):
        # 编写测试用例，测试视图函数的行为
        url = reverse('your_url_name')  # 替换成你的URL
        # url = reverse('your_url_name')  # 替换成你的URL名称
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'your_template.html')  # 替换成你的模板名称

    def test_redirected_url_03(self):
        # 创建另一个测试用的URL
        url = reverse('account_signup')

        # 模拟POST请求
        response = self.client.post(url, {'key': 'value'})

        # 检查响应状态码
        self.assertEqual(response.status_code, 302)  # 302表示重定向

        # 检查重定向目标
        self.assertRedirects(response, '/redirected-url/')

    def test_invalid_url_04(self):
        # 测试无效URL是否返回404错误
        response = self.client.get('/invalid-url/')
        self.assertEqual(response.status_code, 404)
    '''
