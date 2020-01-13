from django.contrib import admin
from django.urls import include, path
from django.views.generic.base import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contact/', include("contacts.api.urls")),
    path('api/infos/', include("infos.api.urls")),
    path('markdownx/', include('markdownx.urls')),
    path('', TemplateView.as_view(template_name="index.html"), name='index')
]
