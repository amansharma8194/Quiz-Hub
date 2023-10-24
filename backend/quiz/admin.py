from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Category)

class CategroyAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'name'
    ]

@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'title',
        'category'
    ]

class AnswerInlineAdmin(admin.TabularInline):
    model = Answer
    fields = [
        'answer_text',
        'is_right'
    ]


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    fields = [
        'text',
        'quiz',
        'technique',
        'difficulty',
        'is_active'
    ]
    list_display = [
        'text',
        'quiz',
        'updated_at'
    ]
    inlines = [
        AnswerInlineAdmin,
    ]

@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = [
        'answer_text',
        'is_right',
        'question'
    ]