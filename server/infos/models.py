from django.db import models
from django.contrib.postgres.fields import ArrayField
from markdownx.models import MarkdownxField

class About(models.Model):
    page = [
        ('about', 'about'),
        ('skills', 'skills'),
        ('work', 'work'),
        ('contact', 'contact')
    ]
    selection = models.CharField(max_length=1000, choices=page)
    content = MarkdownxField()
    class Meta:
        verbose_name = 'about'
        verbose_name_plural = 'about'

class Work(models.Model):
    genre = [
        ('work', 'work'),
        ('project', 'project')
    ]
    selection = models.CharField(max_length=10, choices=genre)
    title = models.CharField(max_length=200)
    img = models.URLField(max_length=200)
    descripiton = MarkdownxField()
    keywords = ArrayField(
        ArrayField(models.CharField(max_length=30))
    )
    points = ArrayField(
        ArrayField(models.CharField(max_length=350))
    )
    class Meta:
        verbose_name = 'work'
        verbose_name_plural = 'works'

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
