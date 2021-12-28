from rest_framework import viewsets

from ecats_api.models import TestTaker, Question
from ecats_api.serializers import (
    TestTakerSerializer,
    QuestionSerializer,
)


class TestTakerViewSet(viewsets.ModelViewSet):
    serializer_class = TestTakerSerializer

    def get_queryset(self):
        queryset = TestTaker.objects.all()
        email = self.request.query_params.get("email")
        if email is not None:
            queryset = queryset.filter(email=email)
        return queryset


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer

    def get_queryset(self):
        queryset = Question.objects.all()
        level = self.request.query_params.get("level")
        count = self.request.query_params.get("count")
        if level is not None:
            queryset = queryset.filter(target__level=level).order_by("?")
        if count is not None:
            count = int(count)
            queryset = queryset[:count]
        return queryset
