from rest_framework.generics import ListAPIView
from infos.models import About, Skills
from .serializers import AboutSerializer, SkillsListSerializer

class AboutAPIView(ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class SkillsListAPIView(ListAPIView):
    queryset = Skills.objects.all()
    serializer_class = SkillsListSerializer
