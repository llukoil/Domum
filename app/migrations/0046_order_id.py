# Generated by Django 2.0.13 on 2019-06-12 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0045_auto_20190612_1808'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order_id',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField(default=30)),
            ],
        ),
    ]
