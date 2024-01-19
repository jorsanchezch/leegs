from factory.django import DjangoModelFactory
from factory import Faker, SubFactory, Sequence
from . import models
from django.contrib.auth.hashers import make_password

class UserFactory(DjangoModelFactory):
    class Meta:
        model = models.User

    email = Sequence(lambda n: 'user{}@example.com'.format(n))
    is_active = True
    is_admin = False
    password = make_password('password')

class ProfileFactory(DjangoModelFactory):
    class Meta:
        model = models.Profile

    user = SubFactory(UserFactory)
    name = Faker('name')
    
