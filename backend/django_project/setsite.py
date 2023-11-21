from django.contrib.sites.models import Site

# 获取当前站点（通常 ID 为 1）
site = Site.objects.get(id=1)

# 更新站点名称
site.name = 'Your Site Name'
site.save()
