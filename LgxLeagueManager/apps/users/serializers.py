from apps.core.serializers import BaseModelSerializer
from .models import User

class UserSerializer(BaseModelSerializer):
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'last_login', 'is_active', 'is_admin', 'created_at', 'updated_at']