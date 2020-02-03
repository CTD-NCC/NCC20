from django.urls import path,include
from .views import *

urlpatterns = [
    path('',include('knox.urls')),
    path('signup/',signup.as_view(),name='signup'),
]