from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from ecats_api.models import TestTaker, TestInstance, Question, QuestionAnswered
from ecats_api.serializers import (
    TestTakerSerializer,
    TestInstanceSerializer,
    QuestionSerializer,
    QuestionAnsweredSerializer,
)


class TestTakerViewSet(viewsets.ModelViewSet):
    queryset = TestTaker.objects.all()
    serializer_class = TestTakerSerializer
    lookup_field = "email"
    lookup_value_regex = "[^/]+"

    @action(detail=True, methods=["get"])
    def test_instances(self, request, email=None):
        queryset = self.get_object().test_instances.all()
        serializer = TestInstanceSerializer(queryset, many=True)
        return Response(serializer.data)


class TestInstanceViewSet(viewsets.ModelViewSet):
    queryset = TestInstance.objects.all()
    serializer_class = TestInstanceSerializer

    @action(detail=True, methods=["get"])
    def questions_answered(self, request, pk=None):
        queryset = self.get_object().questions_answered.all()
        serializer = QuestionAnsweredSerializer(queryset, many=True)
        return Response(serializer.data)


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


class QuestionAnsweredViewSet(viewsets.ModelViewSet):
    queryset = QuestionAnswered.objects.all()
    serializer_class = QuestionAnsweredSerializer
