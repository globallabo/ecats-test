from rest_framework import generics
from ecats_api.models import Question
from ecats_api.serializers import QuestionSerializer


class Question(generics.ListAPIView):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()