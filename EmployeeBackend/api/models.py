from django.db import models

class Employee(models.Model):
    name=models.CharField(max_length=150)
    dept=models.CharField(max_length=150)
    phone=models.CharField(max_length=150)
    email=models.CharField(max_length=150)
    salary=models.CharField(max_length=150)
    created_date=models.DateTimeField(auto_now_add=True)
    updated_date=models.DateTimeField(auto_now=True)
    is_active=models.BooleanField(default=True)

    def __Str__(self):
        return self.name