from django.db import models

# Create your models here.
class AuditableModelMixin():
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True, editable=False)
    
    audit_model = True

    class Meta:
        abstract = True
        
    def __init__(self, *args, **kwargs):
        if not self.audit_model:
            self.created_at = None
            self.updated_at = None
            super().__init__(*args, **kwargs)

class BaseModel(models.Model, AuditableModelMixin):        
    pass