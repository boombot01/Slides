# Generated by Django 2.0.4 on 2018-04-23 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('latex', '0003_auto_20180423_1646'),
    ]

    operations = [
        migrations.RenameField(
            model_name='latexfile',
            old_name='created_ar',
            new_name='created_at',
        ),
        migrations.AlterField(
            model_name='latexfile',
            name='title',
            field=models.CharField(default='whatever', max_length=200),
        ),
    ]