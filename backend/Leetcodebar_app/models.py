from django.db import models

# Create your models here.
class User(models.Model):
    SID = models.CharField(max_length=20 , primary_key=True)
    username = models.CharField(max_length=255 , blank = False )
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255,blank = False)
    
    def __str__(self):
        return self.username