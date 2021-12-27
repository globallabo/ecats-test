from rest_framework import fields, serializers
from ecats_api.models import TestTaker, Question, Answer, QuestionType, Target


class TestTakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestTaker
        fields = ["id", "email", "code", "active"]


class TargetSerializer(serializers.ModelSerializer):
    level = serializers.StringRelatedField()
    category = serializers.StringRelatedField()
    subcategory = serializers.StringRelatedField()

    class Meta:
        model = Target
        fields = [
            "id",
            "level",
            "category",
            "subcategory",
            "can_do_statement_en",
            "can_do_statement_ja",
        ]


class QuestionTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionType
        fields = ["id", "name", "instruction_text_en", "instruction_text_ja"]


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ["id", "answer_text", "is_correct"]


class QuestionSerializer(serializers.ModelSerializer):

    target = TargetSerializer(read_only=True)
    question_type = QuestionTypeSerializer(read_only=True)
    answer_options = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ["id", "target", "question_type", "question_text", "answer_options"]


class RandomQuestionSerializer(serializers.ModelSerializer):

    target = TargetSerializer(read_only=True)
    question_type = QuestionTypeSerializer(read_only=True)
    answer_options = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ["id", "target", "question_type", "question_text", "answer_options"]
