from .models import Sport
from .serializers import SportSerializer
from rest_framework import generics


class SportList(generics.ListCreateAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer


class SportDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer