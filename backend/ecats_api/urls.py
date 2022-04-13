# from django.urls import path
from rest_framework.routers import DefaultRouter
from ecats_api.views import (
    QuestionViewSet,
    TestTakerViewSet,
    TestInstanceViewSet,
    QuestionAnsweredViewSet,
)

app_name = "ecats_api"

router = DefaultRouter()
router.register(r"questions", QuestionViewSet, basename="ecats_api")
router.register(r"test_takers", TestTakerViewSet, basename="test_takers")
router.register(r"test_instances", TestInstanceViewSet, basename="test_instances")
router.register(
    r"questions_answered", QuestionAnsweredViewSet, basename="questions_answered"
)

urlpatterns = router.urls
