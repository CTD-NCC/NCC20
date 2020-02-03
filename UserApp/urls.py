from django.urls import path
from .views import *

urlpatterns = [
    path('login/',signup.as_view(),name='signup'),
]