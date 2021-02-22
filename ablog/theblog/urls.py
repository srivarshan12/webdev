from django.urls import path
from .views import *

urlpatterns = [    
    path('', homeview.as_view(), name="home"),
    path('article/<int:pk>',articledetailview.as_view(), name="article"),
    path('addpost/',addpostview.as_view(), name="addpost"),
    path('article/edit/<int:pk>',updatepostview.as_view(),name="updatepost"),
    path('article/<int:pk>/remove/',deletepostview.as_view(), name="deletepost"),
    path('addcategory/',addcategoryiew.as_view(), name="addcategory"),
    path('category/<str:cats>/',categoryview,name="category"),
    path('category_list/',categorylistview,name="categorylist"),
    path('article/<int:pk>/comment/',addcommentview.as_view(), name="addcomment"),
    path('like/<int:pk>',likeview, name="likepost"),
]
 