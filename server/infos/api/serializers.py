from rest_framework.serializers import ModelSerializer
from infos.models import About, Skills, Work

class AboutSerializer(ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'

class SkillsListSerializer(ModelSerializer):
    class Meta:
        model = Skills
        fields = '__all__'

class WorkListSerializer(ModelSerializer):
    class Meta:
        model = Work
        fields = '__all__'
