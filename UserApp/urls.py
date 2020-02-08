from django.urls import path, include
from .views import *

urlpatterns = [
    path('', include('knox.urls')),
    path('signup/', Signup.as_view(), name='signup'),
]
