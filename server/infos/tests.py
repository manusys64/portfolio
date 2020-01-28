from rest_framework.test import APITestCase
from rest_framework import status
from infos.models import About, Skills, Work

class InfosTestCase(APITestCase):
    def test_about(self):
        data = "<p>This is a sample description</p>"
        About.objects.create(selection = 'about', content = data)
        response = self.client.get("/api/infos/about")
        self.assertEqual(response.data[0]['content'], data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_skills(self):
        data = {'name': 'javascript', 'section': 'Language',
            'url': 'https://img.icons8.com/color/48/000000/python.png'}
        Skills.objects.create(name = data['name'], section = data['section'], url = data['url'])
        response = self.client.get("/api/infos/skills")
        self.assertEqual(response.data[0]['name'], data['name'])
        self.assertEqual(response.data[0]['section'], data['section'])
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_work(self):
        data = {'selection': 'work', 'title': 'The Best Website',
            'url': 'https://test.com', 'img': 'test.png', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'keywords': ['angular', 'django', 'materialize']}

        Work.objects.create(selection = data['selection'], title = data['title'], url = data['url'], img = data['img'], description = data['description'], keywords = data['keywords'])
        response = self.client.get("/api/infos/work")
        self.assertEqual(response.data[0]['title'], data['title'])
        self.assertEqual(response.data[0]['selection'], data['selection'])
        self.assertEqual(response.status_code, status.HTTP_200_OK)
