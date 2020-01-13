from django.db import models
from markdownx.models import MarkdownxField
class About(models.Model):
    content = MarkdownxField()

class Skills(models.Model):
    genre = [
        ('Language', 'Language'),
        ('Framework', 'Framework'),
        ('Backend', 'Backend')
    ]
    name = models.CharField(max_length=30)
    section = models.CharField(max_length=10, choices= genre)

    class Meta:
        verbose_name = 'Skill'
        verbose_name_plural = 'Skilles'
