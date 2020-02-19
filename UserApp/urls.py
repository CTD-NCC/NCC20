from django.urls import path, include
from .views import *
from . import views
from django.conf.urls import url

urlpatterns = [
    # class base:
    path('', Signup.as_view(), name='signup'),
    path('question/', Questionhub.as_view(), name='questionHub'),
    path('code/<int:qn>/', Code.as_view(), name='codeSave'),
    path('leaderboard/', LeaderBoard.as_view(), name='leaderBoard'),
    path('result/', Result.as_view(), name='result'),

    # function base:
    path('timer/', views.timer(), name='timer'),
    path('logout', views.user_logout, name='logout'),
    url(r'^(?P<garbage>.*)/$', views.garbage, name='redirect')
]
