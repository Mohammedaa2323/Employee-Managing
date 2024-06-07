from django.urls import path

from api import views

urlpatterns=[
    path("employee/",views.EmployeeListCreateView.as_view()),
    path("employee/<int:pk>/",views.EmployeeRetrieveUpdateDestroyView.as_view())
]