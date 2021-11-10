from django.urls import path
from ecats_api.views import Question

app_name="ecats_api"

urlpatterns = [
    path("", Question.as_view(), name="ecats_api"),
]