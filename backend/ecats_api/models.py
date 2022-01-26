from django.db import models
import string
import random


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Level(TimeStampedModel):
    name = models.CharField(max_length=10, unique=True)
    description = models.TextField(blank=True)

    def __str__(self) -> str:
        return self.name


class Category(TimeStampedModel):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True)

    class Meta:
        verbose_name_plural = "categories"

    def __str__(self) -> str:
        return self.name


class Subcategory(TimeStampedModel):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    class Meta:
        verbose_name_plural = "subcategories"

    def __str__(self) -> str:
        return self.name


class Target(TimeStampedModel):
    level = models.ForeignKey(Level, on_delete=models.RESTRICT)
    category = models.ForeignKey(Category, on_delete=models.RESTRICT)
    subcategory = models.ForeignKey(Subcategory, on_delete=models.RESTRICT)
    can_do_statement_en = models.TextField(verbose_name="Can-Do Statement in English")
    can_do_statement_ja = models.TextField(verbose_name="Can-Do Statement in Japanese")
    examples = models.TextField(verbose_name="Examples from past exams", blank=True)

    def __str__(self) -> str:
        return self.can_do_statement_en


class QuestionType(TimeStampedModel):
    name = models.CharField(max_length=255)
    instruction_text_en = models.TextField(
        verbose_name="Question type instructions in English"
    )
    instruction_text_ja = models.TextField(
        verbose_name="Question type instructions in Japanese"
    )

    def __str__(self) -> str:
        return self.name


class ApprovalStatus(TimeStampedModel):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    def __str__(self) -> str:
        return self.name


class Question(TimeStampedModel):
    target = models.ForeignKey(Target, on_delete=models.CASCADE)
    question_type = models.ForeignKey(QuestionType, on_delete=models.CASCADE)
    question_text = models.TextField()

    def __str__(self) -> str:
        return self.question_text


class Answer(TimeStampedModel):
    question = models.ForeignKey(
        Question, on_delete=models.CASCADE, related_name="answer_options"
    )
    answer_text = models.TextField(default="")
    is_correct = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.answer_text


def random_code() -> str:
    length = 6
    code = "".join(random.choices(string.digits, k=length))
    return code


class TestTaker(TimeStampedModel):
    email = models.EmailField(unique=True)
    code = models.CharField(max_length=255, default=random_code)
    active = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.email


class TestInstance(TimeStampedModel):
    test_taker = models.ForeignKey(
        TestTaker, on_delete=models.RESTRICT, related_name="test_instances"
    )
    is_started = models.BooleanField(default=False)
    is_finished = models.BooleanField(default=False)
    datetime_taken = models.DateTimeField()


class QuestionAnswered(TimeStampedModel):
    test_instance = models.ForeignKey(
        TestInstance, on_delete=models.CASCADE, related_name="questions_answered"
    )
    question = models.ForeignKey(
        Question, on_delete=models.RESTRICT, related_name="questions_answered"
    )
    answer_given = models.ForeignKey(
        Answer, on_delete=models.RESTRICT, related_name="questions_answered"
    )

    class Meta:
        verbose_name_plural = "questions_answered"
