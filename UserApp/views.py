from django.shortcuts import render,redirect,reverse
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from knox.models import AuthToken


class signup(APIView):
    def get(self,request):
        return HttpResponse("This is Login Page")

    def post(self,request):
        username = request.data.get("username")
        password = request.data.get('password')
        email1 = request.data.get('email1')
        email2 = request.data.get('email2')
        name1 = request.data.get('name1')
        name2 = request.data.get('name2')
        phone1 = request.data.get('phone1')
        phone2 = request.data.get('phone2')

        user = User.objects.create_user(username=username,password=password)

        userprofile = UserProfile(user=user,email1=email1,email2=email2,name1=name1,name2=name2,phone1=phone1,phone2=phone2)
        userprofile.save()

        return Response({"data": request.data , "token": AuthToken.objects.create(user)[1] },status=201)





class LaderBoard(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request):
        data = {}

        for player in UserProfile.objects.order_by("-totalScore"):
            l = []
            for i in range(1,7):
                que = Question.objects.get(pk=i)
                try:
                    ans = MultipleQues.objects.get(user=player,que=que)
                    l.append(ans.scoreQuestion)
                except MultipleQues.DoesNotExist:
                    l.append(0)
            l.append(player.totalScore)
            data[player.user] = l

        sorted(data.items(), key= lambda x: (x[1][6], player.latestSubTime) )
        return Response({"data": data})


class Submissions(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request,qn):
        que = Question.objects.get(pk=qn)
        total_submissions = Submission.objects.filter(user=request.user)
        usersub = []

        for submission in total_submissions:
            if(submission.que == que):
                usersub.append(submission)

        return Response({"submissions": usersub})