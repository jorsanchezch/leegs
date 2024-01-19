from . import models, serializers
from rest_framework import generics

class SportList(generics.ListCreateAPIView):
    queryset = models.Sport.objects.all()
    serializer_class = serializers.SportSerializer


class SportDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Sport.objects.all()
    serializer_class = serializers.SportSerializer
    
    
class LocationList(generics.ListCreateAPIView):
    queryset = models.Location.objects.all()
    serializer_class = serializers.LocationSerializer
    
class LocationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Location.objects.all()
    serializer_class = serializers.LocationSerializer
    
    
class LeagueList(generics.ListCreateAPIView):
    queryset = models.League.objects.all()
    serializer_class = serializers.LeagueSerializer
    
    
class LeagueDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.League.objects.all()
    serializer_class = serializers.LeagueSerializer
    
    
class LeagueDefaultsList(generics.ListCreateAPIView):
    queryset = models.LeagueDefaults.objects.all()
    serializer_class = serializers.LeagueDefaultsSerializer
   
    
class LeagueDefaultsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.LeagueDefaults.objects.all()
    serializer_class = serializers.LeagueDefaultsSerializer
    
    
class MembershipList(generics.ListCreateAPIView):
    queryset = models.Membership.objects.all()
    serializer_class = serializers.MembershipSerializer
    
    
class MembershipDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Membership.objects.all()
    serializer_class = serializers.MembershipSerializer
    
    
class OccurrenceList(generics.ListCreateAPIView):
    queryset = models.Occurrence.objects.all()
    serializer_class = serializers.OccurrenceSerializer
    
    
class OccurrenceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Occurrence.objects.all()
    serializer_class = serializers.OccurrenceSerializer
    

class AttendanceList(generics.ListCreateAPIView):
    queryset = models.Attendance.objects.all()
    serializer_class = serializers.AttendanceSerializer
    
    
class AttendanceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Attendance.objects.all()
    serializer_class = serializers.AttendanceSerializer
    