from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.

class Category(models.Model):
    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")
        ordering = ['id']
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Quiz(models.Model):
    class Meta:
        verbose_name = _("Quiz")
        verbose_name_plural = _("Quizzes")
        ordering = ['id']
    title = models.CharField(max_length=100, default=_("New Quiz"), verbose_name=_("Quiz Title"))
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, default=1, on_delete=models.SET_DEFAULT)

    def __str__(self):
        return self.title



class UpdateQuestion(models.Model):
    updated_at = models.DateTimeField(auto_now=True, verbose_name= _("Last Updated"))
    class Meta:
        abstract = True

class Question(UpdateQuestion):
    class Meta:
        verbose_name = _("Question")
        verbose_name_plural = _("Questions")
        ordering = ['id']
    SCALE = (
        (0, _("FundaMental")),
        (1, _("Basic")),
        (2, _("InterMediate")),
        (3, _("Advanced")),
        (4, _("Expert"))
    )
    TYPE = (
        (0, _("MultiPle Choice Question")),
    )
    text = models.TextField()
    quiz = models.ForeignKey(Quiz, related_name="question", on_delete=models.CASCADE)
    technique = models.IntegerField(default=0, choices=TYPE, verbose_name= _("Type of Question")) 
    difficulty = models.IntegerField(default=0, choices=SCALE, verbose_name=_("Difficulty"))
    created_at =  models.DateTimeField(auto_now_add=True, verbose_name= _("Created At"))
    is_active = models.BooleanField(default=False, verbose_name= _("Active Status"))
    def __str__(self):
        return self.text
    
class Answer(UpdateQuestion):
    class Meta:
        verbose_name = _("Answer")
        verbose_name_plural = _("Answers")
        ordering = ['id']
    answer_text = models.CharField(max_length=255, verbose_name= _("Answer Text"))
    question = models.ForeignKey(Question, related_name= _("answer"), on_delete=models.CASCADE)
    is_right = models.BooleanField(default=False)

    def __str__(self):
        return self.answer_text


