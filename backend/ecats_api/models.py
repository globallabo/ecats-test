from django.db import models

class TimeStampedModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Level(TimeStampedModel):
    name = models.CharField(max_length=10, unique=True)
    description = models.TextField(blank=True)


class Category(TimeStampedModel):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True)

    class Meta:
        verbose_name_plural = "categories"


class Subcategory(TimeStampedModel):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    class Meta:
        verbose_name_plural = "subcategories"


class Target(TimeStampedModel):
    level = models.ForeignKey(Level, on_delete=models.RESTRICT)
    category = models.ForeignKey(Category, on_delete=models.RESTRICT)
    subcategory = models.ForeignKey(Subcategory, on_delete=models.RESTRICT)
    can_do_statement_en = models.TextField(verbose_name="Can-Do Statement in English")
    can_do_statement_ja = models.TextField(verbose_name="Can-Do Statement in Japanese")
    examples = models.TextField(verbose_name="Examples from past exams", blank=True)


class QuestionType(TimeStampedModel):
    name = models.CharField(max_length=10)
    instruction_text_en = models.TextField(verbose_name="Question type instructions in English")
    instruction_text_ja = models.TextField(verbose_name="Question type instructions in Japanese")


class ApprovalStatus(TimeStampedModel):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)


class Question(TimeStampedModel):
    target = models.ForeignKey(Target, on_delete=models.CASCADE)
    question_type = models.ForeignKey(QuestionType, on_delete=models.CASCADE)
    question_text = models.TextField


class Answer(TimeStampedModel):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer_text = models.TextField
    is_correct = models.BooleanField(default=False)