from rest_framework import serializers

class BaseModelSerializer(serializers.ModelSerializer):
    class Meta:
        read_only_fields = ('id',)
