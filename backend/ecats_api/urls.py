from django.urls import path
from ecats_api.views import AllQuestions, RandomQuestion

app_name="ecats_api"

urlpatterns = [
    path("", AllQuestions.as_view(), name="ecats_api"),
    path("r/<str:level>/", RandomQuestion.as_view(), name="random"),
]