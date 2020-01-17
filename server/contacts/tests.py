from rest_framework.test import APITestCase
from rest_framework import status

class ContactTestCase(APITestCase):

    def test_contact(self):
        data = {"name": "Ryoma Sakamoto","email": "sk@gmail.com","message": "This is a test. Thank you."}
        response = self.client.post("/api/contact/create", data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
