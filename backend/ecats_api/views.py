from rest_framework import viewsets

from ecats_api.models import TestTaker, TestInstance, Question
from ecats_api.serializers import (
    TestTakerSerializer,
    TestInstanceSerializer,
    QuestionSerializer,
)


class TestTakerViewSet(viewsets.ModelViewSet):
    queryset = TestTaker.objects.all()
    serializer_class = TestTakerSerializer
    lookup_field = "email"
    lookup_value_regex = "[^/]+"


class TestInstanceViewSet(viewsets.ModelViewSet):
    queryset = TestInstance.objects.all()
    serializer_class = TestInstanceSerializer


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
