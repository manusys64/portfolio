from rest_framework.test import APITestCase
from rest_framework import status
from infos.models import About, Skills

class InfosTestCase(APITestCase):
    def setUp(self):
        About.objects.create(content="<p>This is a sample description</p>")

    def test_about(self):
        response = self.client.get("/api/infos/about")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
