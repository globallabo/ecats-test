from rest_framework import serializers
from ecats_api.models import Question, Answer, QuestionType


class QuestionTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = QuestionType
        fields =["id", "name", "instruction_text_en", "instruction_text_ja"]

class AnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answer
        fields =["id", "answer_text", "is_correct"]

class QuestionSerializer(serializers.ModelSerializer):

    question_type = QuestionTypeSerializer(read_only=True)
    answer_set = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ["id", "question_type", "question_text", "answer_set"]