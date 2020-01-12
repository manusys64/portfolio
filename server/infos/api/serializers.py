from rest_framework.serializers import ModelSerializer
from infos.models import About, Skills

class AboutSerializer(ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'

class SkillsListSerializer(ModelSerializer):
    class Meta:
        model = Skills
        fields = '__all__'
