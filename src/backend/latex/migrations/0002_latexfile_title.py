# Generated by Django 2.0.4 on 2018-04-23 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('latex', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='latexfile',
            name='title',
            field=models.CharField(default='None', max_length=200),
        ),
    ]
