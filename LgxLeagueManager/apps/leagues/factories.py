from factory.django import DjangoModelFactory
import pytz
from factory import Faker, SubFactory, Sequence
from . import models
from apps.users.factories import UserFactory

class SportFactory(DjangoModelFactory):
    class Meta:
        model = models.Sport

    name = Faker('name')
    
class LocationFactory(DjangoModelFactory):
    class Meta:
        model = models.Location

    name = Faker('city')
    address = Faker('street_address')
    latitude = Faker('coordinate')
    longitude = Faker('coordinate')

class LeagueFactory(DjangoModelFactory):
    class Meta:
        model = models.League

    name = Sequence(lambda n: 'League {}'.format(n))
    description = Faker('paragraph')
    owner = SubFactory(UserFactory)
    sport = SubFactory(SportFactory)

class LeagueDefaultsFactory(DjangoModelFactory):
    class Meta:
        model = models.LeagueDefaults

    league = SubFactory(LeagueFactory)
    location = SubFactory(LocationFactory)

class MembershipFactory(DjangoModelFactory):
    class Meta:
        model = models.Membership

    league = SubFactory(LeagueFactory)
    user = SubFactory(UserFactory)

class OccurrenceFactory(DjangoModelFactory):
    class Meta: 
        model = models.Occurrence

    league = SubFactory(LeagueFactory)
    notes = Faker('paragraph')
    location = SubFactory(LocationFactory)
    date = Faker('date_time', tzinfo=pytz.timezone('US/Eastern'))
    
class AttendanceFactory(DjangoModelFactory):
    class Meta:
        model = models.Attendance

    occurrence = SubFactory(OccurrenceFactory)
    member = SubFactory(UserFactory)
    attendee_alias = Sequence(lambda n: 'Guest {}'.format(n))
