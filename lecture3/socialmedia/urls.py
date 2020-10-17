from django.urls import path
from . import views


urlpatterns=[
    path("",views.index, name="index"),
    # url(r'^my_def_in_view$', views.my_def_in_view, name='my_def_in_view'),
]