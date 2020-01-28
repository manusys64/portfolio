from django.urls import include, path
from .views import AboutAPIView, SkillsListAPIView, WorkListAPIView

urlpatterns = [
    path('about', AboutAPIView.as_view()),
    path('skills', SkillsListAPIView.as_view()),
    path('work', WorkListAPIView.as_view())
]
