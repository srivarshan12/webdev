
from . import views
from django.urls import path
from .views import *
from django.contrib.auth import views as auth_views
urlpatterns = [    
    path('register/',userregisterview.as_view(),name='register'),
    path('edit_profile/',usereditview.as_view(),name='editprofile'),
    # path('password/',auth_views.PasswordChangeView.as_view(template_name='registration/change-password.html')),
    path('password/',passwordschangeview.as_view(template_name='registration/change-password.html')),
    path('password_success',views.password_success,name="passwordsuccess"),
    path('<int:pk>/profile/',showprofilepageview.as_view(),name="showprofilepage"),
    path('<int:pk>/edit_profile_page/',editprofilepageview.as_view(),name="editprofilepage"),
    path('create_profile_page/',createprofilepageview.as_view(),name="createprofilepage"),

]
