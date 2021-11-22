from django.db import models


class TimeStampedModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

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
    instruction_text_en = models.TextField(verbose_name="Question type instructions in English")
    instruction_text_ja = models.TextField(verbose_name="Question type instructions in Japanese")

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
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer_text = models.TextField(default="")
    is_correct = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.answer_text