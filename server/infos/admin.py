from django.contrib import admin
from django.db import models
from .models import About, Skills, Work
from markdownx.admin import MarkdownxModelAdmin
from markdownx.widgets import AdminMarkdownxWidget

class AboutAdmin(admin.ModelAdmin):
    list_display = ['selection']
    formfield_overrides = {
        models.TextField: {'widget': AdminMarkdownxWidget},
    }

class WorkAdmin(admin.ModelAdmin):
    list_display = ['title']
    formfield_overrides = {
        models.TextField: {'widget': AdminMarkdownxWidget},
    }

class SkillsAdmin(admin.ModelAdmin):
    list_display = ['name', 'section']

admin.site.register(About, AboutAdmin)
admin.site.register(Work, WorkAdmin)
admin.site.register(Skills, SkillsAdmin)
