from django.urls import path, include
from .views import *

urlpatterns = [
    path('', include('knox.urls')),
    path('signup/', Signup.as_view(), name='signup'),
    path('questionhub/',Questionhub.as_view()),
    path('code/<int:qn>/',Code.as_view()),
    path('leaderboard/',LeaderBoard.as_view()),
    path('result/',Result.as_view()),
]
