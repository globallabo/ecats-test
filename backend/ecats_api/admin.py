from django.contrib import admin
from django import forms
from django.db.models import TextField

from ecats_api import models


class AnswerInlineModel(admin.TabularInline):
    model = models.Answer
    extra = 4
    formfield_overrides = {
        TextField: {"widget": forms.widgets.TextInput(attrs={'size': 50})}
    }


@admin.register(models.Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("target", "question_type", "question_text")
    inlines = [AnswerInlineModel]
    # Use the below to get a single-line TextInput instead of a textarea
    # formfield_overrides = {
    #     TextField: {"widget": forms.widgets.TextInput(attrs={'size': 50})}
    # }

@admin.register(models.QuestionType)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("name", "instruction_text_en")

@admin.register(models.Target)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("level", "category", "subcategory", "can_do_statement_en")

admin.site.register(models.Level)
admin.site.register(models.Category)
admin.site.register(models.Subcategory)
