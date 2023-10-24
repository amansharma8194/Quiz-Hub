from django.urls import path
from .views import *

urlpatterns = [
    path('', QuizListAPIView.as_view(), name='category-page'),
    path('random/', RandomQuestionAPIView.as_view(), name='random-question-page'),
    path('questions/<str:quiz>', QuestionsListAPIView.as_view(), name='question-page'),
]
