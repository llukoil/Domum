# Generated by Django 2.0.13 on 2019-05-16 20:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0016_auto_20190515_2356'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='person',
            name='password',
        ),
    ]
