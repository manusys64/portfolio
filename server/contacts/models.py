from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100, null=True)
    email = models.EmailField(max_length=50)
    message = models.TextField(max_length=3000)
    received  = models.DateTimeField(auto_now=False, auto_now_add = True)
