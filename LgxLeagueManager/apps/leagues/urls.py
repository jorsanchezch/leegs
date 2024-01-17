from django.urls import path
from . import views

urlpatterns = [
    path('sports/', views.SportList.as_view()),
    path('sports/<int:pk>/', views.SportDetail.as_view()),
]
