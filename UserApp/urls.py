from django.urls import path, include
from .views import *
from django.conf.urls import url

urlpatterns = [
    path('signup/', Signup.as_view(), name='signup'),
    path('question/', Questionhub.as_view(), name='questionHub'),
    path('code/<int:qn>/', Code.as_view(), name='codeSave'),
    path('leaderboard/', LeaderBoard.as_view(), name='leaderBoard'),
    path('submission',Submissions.as_view()),
    path('result/', Result.as_view(), name='result'),
    path('checkusername/', check.as_view()),

    # function base:
    path('timer/', timer, name='timer'),
    path('time/', time, name='timer'),
    url(r'^(?P<garbage>.*)/$', garbage, name='redirect')
]
