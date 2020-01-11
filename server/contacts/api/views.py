"""REST Contact View"""
from rest_framework.generics import CreateAPIView
from contacts.api.serializers import ContactCreateSerializer
from rest_framework import viewsets
from contacts.models import Contact

class ContactCreateAPIView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactCreateSerializer
