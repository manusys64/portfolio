# Generated by Django 3.0.2 on 2020-01-27 00:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('infos', '0002_skills_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='work',
            name='img',
            field=models.ImageField(upload_to='images/'),
        ),
    ]