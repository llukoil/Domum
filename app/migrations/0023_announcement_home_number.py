# Generated by Django 2.0.13 on 2019-05-28 19:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0022_auto_20190528_2229'),
    ]

    operations = [
        migrations.AddField(
            model_name='announcement',
            name='home_number',
            field=models.CharField(default='1', help_text='Укажите номер дома', max_length=5),
        ),
    ]
