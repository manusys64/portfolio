"""REST Contact Serialization"""
from django.conf import settings
from rest_framework import serializers
from django.core.mail import EmailMultiAlternatives
# from django.core.mail import send_mail
from contacts.models import Contact

class ContactCreateSerializer(serializers.Serializer):
    name = serializers.CharField()
    email = serializers.EmailField()
    message = serializers.CharField()
    #
    def create(self, validated_data):
        Name = self.data.get('name')
        Email = self.data.get('email')
        Message = self.data.get('message')

        # from_email = ''
        # subject = 'Contact Notificatin From '+ Name
        # html_message  = 'You have a new message!<br><br>Name: %s<br/>Contact: %s<br/>Phone: %s<br/>Message: %s<br/>'%(Name, Email, Phone, Message)
        # message = 'Just Testing'
        # to = ''
        # text_content = 'Email Received'
        # to = ''
        # msg = EmailMultiAlternatives(
        #     subject,
        #     text_content,
        #     from_email,
        #     [to]
        # )
        # msg.attach_alternative(html_content, "text/html")
        # msg.send()
        # send_mail(subject, message, from_email, [to], fail_silently=False, html_message=html_message)
        return Contact.objects.create(**validated_data)
