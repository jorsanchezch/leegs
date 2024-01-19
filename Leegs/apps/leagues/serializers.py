from apps.core.serializers import BaseModelSerializer
from rest_framework import serializers
from . import models

class SportSerializer(BaseModelSerializer):
    class Meta:
        model = models.Sport
        fields = ('id', 'name')

    def validate_name(self, value):
        #Ensure sport name is unique.
        if Sport.objects.filter(name__iexact=value).exists():
            raise serializers.ValidationError("A sport with this name already exists.")
        return value
    

class LocationSerializer(BaseModelSerializer):
    class Meta:
        model = models.Location
        fields = ('id', 'name', 'address', 'latitude', 'longitude')

    def validate_name(self, value):
        #Ensure location name is unique.
        if Location.objects.filter(name__iexact=value).exists():
            raise serializers.ValidationError("A location with this name already exists.")
        return value
    

class LeagueSerializer(BaseModelSerializer):
    defaults = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    occurrences = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    
    class Meta:
        model = models.League
        fields = ('id', 'name', 'description', 'owner', 'sport', 'is_active', 'is_recurrent', 'defaults', 'occurrences')

    def validate_name(self, value):
        #Ensure league name is unique.
        if League.objects.filter(name__iexact=value).exists():
            raise serializers.ValidationError("A league with this name already exists.")
        return value
    

class LeagueDefaultsSerializer(BaseModelSerializer):
    class Meta:
        model = models.LeagueDefaults
        fields = ('id', 'league', 'location', 'is_online_payment_allowed', 'is_cash_payment_allowed')

    def validate_name(self, value):
        if LeagueDefaults.objects.filter(name__iexact=value).exists():
            raise serializers.ValidationError("A league defaults with this name already exists.")
        return value
    
    
class MembershipSerializer(BaseModelSerializer):
    class Meta:
        model = models.Membership
        fields = ('id', 'league', 'user', 'manager')

    def validate_name(self, value):
        if Membership.objects.filter(name__iexact=value).exists():
            raise serializers.ValidationError("A membership with this name already exists.")
        return value
    
    
class OccurrenceSerializer(BaseModelSerializer):
    class Meta:
        model = models.Occurrence
        fields = ('id', 'league', 'notes', 'location', 'date', 'is_online_payment_allowed', 'is_cash_payment_allowed')

    def validate_name(self, value):
        if Occurrence.objects.filter(name__iexact=value).exists():
            raise serializers.ValidationError("An occurrence with this name already exists.")
        return value

class AttendanceSerializer(BaseModelSerializer):
    class Meta:
        model = models.Attendance
        fields = ('id', 'occurrence', 'member', 'attendee_alias', 'has_paid', 'has_confirmed_attendance', 'is_invited')

    def validate_name(self, value):
        if Attendance.objects.filter(name__iexact=value).exists():
            raise serializers.ValidationError("An attendance with this name already exists.")
        return value