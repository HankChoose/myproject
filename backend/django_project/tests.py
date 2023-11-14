from django.test import TestCase
from django.urls import reverse


class MyViewTests(TestCase):
    def test_my_view(self):
        # 创建一个测试用的URL
        url = reverse('Register')

        # 模拟GET请求
        response = self.client.get(url)

        # 检查响应状态码
        self.assertEqual(response.status_code, 200)

        # 检查响应内容
        self.assertContains(response, "Hello, world!")

    def test_another_view(self):
        # 创建另一个测试用的URL
        url = reverse('account_signup')

        # 模拟POST请求
        response = self.client.post(url, {'key': 'value'})

        # 检查响应状态码
        self.assertEqual(response.status_code, 302)  # 302表示重定向

        # 检查重定向目标
        self.assertRedirects(response, '/redirected-url/')
