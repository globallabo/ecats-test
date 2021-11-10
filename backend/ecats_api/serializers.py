from rest_framework import serializers
from ecats_api import models


class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Question
        fields = ["id", "question_text"]