from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from .models import *
# Create your views here.

class QuizListAPIView(generics.ListAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizListSerializer


class RandomQuestionAPIView(APIView):
    def get(self, request, format=None, **kwargs):
        try:
            question = Question.objects.all().order_by('?').first()
            if question.text=="":
                throw("Quiz Not Found")
            serialized_question = QuestionSerializer(question, many=False)
            return Response(serialized_question.data)
        except:
            return Response({"message": "quiz not found"}, status=status.HTTP_404_NOT_FOUND)
        
class QuestionsListAPIView(generics.ListAPIView):
    serializer_class = QuestionSerializer
    def get_queryset(self):
        questions = Question.objects.filter(quiz__title=self.kwargs['quiz'])
        return questions
    
    
    
