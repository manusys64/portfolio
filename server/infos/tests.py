from rest_framework.test import APITestCase
from rest_framework import status
from infos.models import About, Skills

class InfosTestCase(APITestCase):
    def test_about(self):
        data = "<p>This is a sample description</p>"
        About.objects.create(content = data)
        response = self.client.get("/api/infos/about")
        self.assertEqual(response.data[0]['content'], data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_skills(self):
        data = {'name': 'javascript', 'section': 'Language'}
        Skills.objects.create(name = data['name'], section = data['section'])
        response = self.client.get("/api/infos/skills")
        self.assertEqual(response.data[0]['name'], data['name'])
        self.assertEqual(response.data[0]['section'], data['section'])
        self.assertEqual(response.status_code, status.HTTP_200_OK)
