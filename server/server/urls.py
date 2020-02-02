from django.contrib import admin
from django.urls import include, path, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic.base import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contact/', include("contacts.api.urls")),
    path('api/infos/', include("infos.api.urls")),
    path('markdownx/', include('markdownx.urls')),
    re_path(r'^(?P<path>.*)/$', TemplateView.as_view(template_name="index.html"), name='index'),
    path('', TemplateView.as_view(template_name="index.html"), name='index')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
