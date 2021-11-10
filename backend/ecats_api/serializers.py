from rest_framework import serializers
from ecats_api.models import Question, Answer


class AnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answer
        fields =["id", "answer_text", "is_correct"]

class QuestionSerializer(serializers.ModelSerializer):

    answer_set = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ["id", "question_text", "answer_set"]