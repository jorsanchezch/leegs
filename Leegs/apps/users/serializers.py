from apps.core.serializers import BaseModelSerializer
from . import models

class UserSerializer(BaseModelSerializer):
    
    class Meta:
        model = models.User
        fields = ['id', 'username', 'email', 'last_login', 'is_active', 'is_admin', 'created_at', 'updated_at']
        
        
class ProfileSerializer(BaseModelSerializer):

    class Meta:
        model = models.Profile
        fields = ['id', 'user', 'name']
        read_only_fields = ['id', 'user']