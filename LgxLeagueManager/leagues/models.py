from django.db import models
from core.models import BaseModel
from users.models import User

class Sport(models.Model):
    name = models.CharField(max_length=255, unique=True)
    
class Location(BaseModel):
    name = models.CharField(max_length=255, null=True)
    address = models.CharField(max_length=255)
    latitude = models.FloatField(null=True)
    longitude = models.FloatField(null=True)
    
class League(BaseModel):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    is_recurrent = models.BooleanField(default=False)
    
class LeagueDefaults(BaseModel):
    league = models.OneToOneField(League, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, null=True, on_delete=models.SET_NULL)
    is_online_payment_allowed = models.BooleanField(default=False)
    is_cash_payment_allowed = models.BooleanField(default=False)
   
    class Meta:
        db_table = 'leagues_league_defaults'
class Membership(models.Model):
        
    league = models.ForeignKey(League, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    manager = models.BooleanField(default=False)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['league', 'user'], name='unique_league_member')
        ]

# A league will have many occurrences, given a date and location which may be added later in the future.
class Occurence(BaseModel):
    league = models.ForeignKey(League, on_delete=models.CASCADE)
    notes = models.TextField(null=True)
    location = models.ForeignKey(Location, null=True, on_delete=models.SET_NULL)
    date = models.DateTimeField()
    is_online_payment_allowed = models.BooleanField(default=False)
    is_cash_payment_allowed = models.BooleanField(default=False)

# Users may sign up for occurrences, while there may be invited users as well.
class Attendance(BaseModel):
    occurrence = models.ForeignKey(Occurence, on_delete=models.CASCADE)
    member = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    attendee_alias = models.CharField(max_length=255, null=True, unique=True)
    has_paid = models.BooleanField(default=False)
    has_confirmed_attendance = models.BooleanField(default=False)
    is_invited = models.BooleanField(default=False)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['occurrence', 'member'], name='unique_occurrence_attendee'),
            models.UniqueConstraint(fields=['occurrence', 'attendee_alias'], name='unique_occurrence_attendee_alias')

        ]
        
    def clean(self):
        if self.is_invited and not self.attendant_alias:
            raise models.ValidationError({'attendant_alias': 'Attendant name is required for invitees'})