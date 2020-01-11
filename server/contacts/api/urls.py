from django.urls import include, path
from .views import ContactCreateAPIView

urlpatterns = [
    path('create', ContactCreateAPIView.as_view())
]
