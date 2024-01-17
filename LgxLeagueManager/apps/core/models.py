from django.db import models
from libs.utils.string import pascal_to_snake

# Create your models here.
class AuditableModelMixin(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True, editable=False)

    audit_model = True

    class Meta:
        abstract = True
        
    def __init__(self, *args, **kwargs):
        if not self.audit_model:
            kwargs.pop('created_at', None)
            kwargs.pop('updated_at', None)
        super(AuditableModelMixin, self).__init__(*args, **kwargs)

class BaseModel(AuditableModelMixin):
    class Meta:
        abstract = True
        
    def __init__(self, *args, **kwargs):
        super(BaseModel, self).__init__(*args, **kwargs)
        
    @classmethod            
    def get_db_table(cls):
        app = cls._meta.app_label
        model = cls._meta.model_name
        
        return f'{app}_{pascal_to_snake(model)}'
    
