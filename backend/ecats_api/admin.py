from django.contrib import admin
from django import forms
from django.db import models

from . import models as mymodels


class AnswerInlineModel(admin.TabularInline):
    model = mymodels.Answer
    extra = 4
    formfield_overrides = {
        models.TextField: {"widget": forms.widgets.TextInput(attrs={'size': 50})}
    }


@admin.register(mymodels.Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("target", "question_type", "question_text")
    inlines = [AnswerInlineModel]
    formfield_overrides = {
        models.TextField: {"widget": forms.widgets.TextInput(attrs={'size': 50})}
    }

@admin.register(mymodels.QuestionType)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("name", "instruction_text_en")

@admin.register(mymodels.Target)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("level", "category", "subcategory", "can_do_statement_en")

admin.site.register(mymodels.Level)
admin.site.register(mymodels.Category)
admin.site.register(mymodels.Subcategory)
