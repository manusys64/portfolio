# Generated by Django 3.0.2 on 2020-01-27 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('infos', '0004_remove_work_points'),
    ]

    operations = [
        migrations.AddField(
            model_name='work',
            name='code',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='work',
            name='url',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
