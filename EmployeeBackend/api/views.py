from django.shortcuts import render
from api.models import Employee
from api.serializers import EmployeeSerializer
from rest_framework.generics import ListAPIView,CreateAPIView,UpdateAPIView,DestroyAPIView,RetrieveAPIView

class EmployeeListCreateView(ListAPIView,CreateAPIView):
    serializer_class=EmployeeSerializer
    queryset=Employee.objects.all()
class EmployeeRetrieveUpdateDestroyView(RetrieveAPIView,UpdateAPIView,DestroyAPIView):
    serializer_class=EmployeeSerializer
    queryset=Employee.objects.all()