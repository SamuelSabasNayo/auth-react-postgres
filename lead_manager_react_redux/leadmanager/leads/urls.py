from django.urls import path
from .views import LeadViewSet

urlpatterns = [
    path('', LeadViewSet.as_view()),
    path('<int:id>/', LeadViewSet.as_view()),
]
