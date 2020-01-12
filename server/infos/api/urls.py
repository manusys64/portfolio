from django.urls import include, path
from .views import AboutAPIView, SkillsListAPIView

urlpatterns = [
    path('about', AboutAPIView.as_view()),
    path('skills', SkillsListAPIView.as_view())
]
