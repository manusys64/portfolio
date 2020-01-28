from rest_framework.generics import ListAPIView
from infos.models import About, Skills, Work
from .serializers import AboutSerializer, SkillsListSerializer, WorkListSerializer

class AboutAPIView(ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class SkillsListAPIView(ListAPIView):
    queryset = Skills.objects.all()
    serializer_class = SkillsListSerializer

class WorkListAPIView(ListAPIView):
    queryset = Work.objects.all()
    serializer_class = WorkListSerializer
