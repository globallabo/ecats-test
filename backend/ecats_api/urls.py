# from django.urls import path
from rest_framework.routers import DefaultRouter
from ecats_api.views import QuestionViewSet, TestTakerViewSet

app_name = "ecats_api"

router = DefaultRouter()
router.register(r"questions", QuestionViewSet, basename="ecats_api")
router.register(r"test_takers", TestTakerViewSet, basename="test_takers")

urlpatterns = router.urls
