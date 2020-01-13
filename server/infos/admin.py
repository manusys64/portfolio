from django.contrib import admin
from .models import About, Skills
from markdownx.admin import MarkdownxModelAdmin

admin.site.register(About, MarkdownxModelAdmin)
admin.site.register(Skills)
