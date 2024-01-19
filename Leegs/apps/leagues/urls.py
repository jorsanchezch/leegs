from django.urls import path
from . import views

urlpatterns = [
    path('sports/', views.SportList.as_view()),
    path('sports/<int:pk>/', views.SportDetail.as_view()),
    path('locations/', views.LocationList.as_view()),
    path('locations/<int:pk>/', views.LocationDetail.as_view()),
    path('leagues/', views.LeagueList.as_view()),
    path('leagues/<int:pk>/', views.LeagueDetail.as_view()),
    path('league_defaults/', views.LeagueDefaultsList.as_view()),
    path('league_defaults/<int:pk>/', views.LeagueDefaultsDetail.as_view()),
    path('memberships/', views.MembershipList.as_view()),
    path('memberships/<int:pk>/', views.MembershipDetail.as_view()),
    path('occurrences/', views.OccurrenceList.as_view()),
    path('occurrences/<int:pk>/', views.OccurrenceDetail.as_view()),
    path('attendance/', views.AttendanceList.as_view()),
    path('attendance/<int:pk>/', views.AttendanceDetail.as_view()),
]
