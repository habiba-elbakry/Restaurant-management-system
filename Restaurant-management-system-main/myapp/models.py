from django.db import models
from datetime import datetime



# Create your models here.
class Booking(models.Model):
   first_name = models.CharField(max_length=200)    
   last_name = models.CharField(max_length=200)
   guest_number = models.IntegerField()
   date = models.DateField()
   order=models.CharField(max_length=1000, default='')
   bill = models.FloatField(default=0.00)
   comment = models.CharField(max_length=1000)

   def __str__(self):
      return self.first_name + '' + self.last_name
   
class Reporting(models.Model):
   table_ID=models.IntegerField()
   email = models.CharField(max_length=200)
   report = models.CharField(max_length=1000)
   def __str__(self):
      return str(self.table_ID)
   
   
class Menu(models.Model):
    name=models.CharField(max_length=200)
    price=models.IntegerField()
    type=models.CharField(max_length=200,default='')
    description=models.CharField(max_length=1000,default='')

    def __str__(self):
        return self.name
    
   
class Rating(models.Model):
   rating_choices = (
        ('1', '★'),
        ('2', '★★'),
        ('3', '★★★'),
        ('4', '★★★★'),
        ('5', '★★★★★'),
       )
   first_name = models.CharField(max_length=200)    
   last_name = models.CharField(max_length=200)
   rating = models.CharField(max_length=1, choices=rating_choices)

   def __str__(self):
      return self.first_name + ' ' + self.last_name

class Cancel(models.Model):
   first_name = models.CharField(max_length=200,default='')    
   last_name = models.CharField(max_length=200,default='')
   table_ID=models.IntegerField()

   def __str__(self):
      return str(self.table_ID)
