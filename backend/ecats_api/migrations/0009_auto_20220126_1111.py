# Generated by Django 3.2.8 on 2022-01-26 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecats_api', '0008_auto_20220126_1058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testinstance',
            name='finished_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='testinstance',
            name='started_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]