from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from ecats_api.models import Question
from ecats_api.serializers import QuestionSerializer, RandomQuestionSerializer


class AllQuestions(generics.ListAPIView):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


class RandomQuestion(APIView):

    def get(self, request, format=None, **kwargs):
        question = Question.objects.filter(target__level=kwargs["level"]).order_by("?")[:1]
        serializer = RandomQuestionSerializer(question, many=True)
        return Response(serializer.data)