# Generated by Django 4.2.19 on 2025-02-21 12:36

import InvenTree.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("company", "0071_manufacturerpart_notes_supplierpart_notes"),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='website',
            field=models.TextField()  # Temporary change to force new ALTER COLUMN operation in the next migration
        ),
        migrations.AlterField(
            model_name='company',
            name='link',
            field=models.TextField()  # Temporary change to force new ALTER COLUMN operation in the next migration
        ),
        migrations.AlterField(
            model_name='address',
            name='link',
            field=models.TextField()  # Temporary change to force new ALTER COLUMN operation in the next migration
        ),
        migrations.AlterField(
            model_name='supplierpart',
            name='link',
            field=models.TextField()  # Temporary change to force new ALTER COLUMN operation in the next migration
        ),
        migrations.AlterField(
            model_name='manufacturerpart',
            name='link',
            field=models.TextField()  # Temporary change to force new ALTER COLUMN operation in the next migration
        ),
    ]
