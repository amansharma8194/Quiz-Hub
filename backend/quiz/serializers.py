from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'name'
        ]

class QuizListSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Quiz
        fields = [
            'id',
            'title',
            'created_at',
            'category'
        ]

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = "__all__"

class QuestionSerializer(serializers.ModelSerializer):
    quiz = QuizListSerializer(read_only=True)
    answer = AnswerSerializer(many=True, read_only=True)
    technique = serializers.CharField(source='get_technique_display')
    difficulty = serializers.CharField(source='get_difficulty_display')
    class Meta:
        model = Question
        fields = [
            'id',
            'text',
            'technique',
            'difficulty',
            'updated_at',
            'is_active',
            'quiz',
            'answer'
        ]