# Generated by Django 2.0.13 on 2019-05-16 20:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app', '0017_remove_person_password'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='person',
            name='fio',
        ),
        migrations.RemoveField(
            model_name='person',
            name='login',
        ),
        migrations.RemoveField(
            model_name='person',
            name='mail',
        ),
        migrations.AddField(
            model_name='person',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]