# Generated by Django 4.2.6 on 2023-10-14 06:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0002_alter_answer_question'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='quiz',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='question', to='quiz.quiz'),
        ),
        migrations.AlterField(
            model_name='quiz',
            name='category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, to='quiz.category'),
        ),
    ]
