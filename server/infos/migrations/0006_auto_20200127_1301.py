# Generated by Django 3.0.2 on 2020-01-27 13:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('infos', '0005_auto_20200127_1249'),
    ]

    operations = [
        migrations.RenameField(
            model_name='work',
            old_name='descripiton',
            new_name='description',
        ),
    ]
