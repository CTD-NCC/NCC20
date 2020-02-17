from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from knox.models import AuthToken
from datetime import datetime
import os,subprocess

starttime = 0
end_time = 0


def calculate():
    time = datetime.datetime.now()
    nowsec = (time.hour * 60 * 60) + (time.minute * 60) + time.second
    global starttime
    global end_time
    diff = end_time - nowsec
    if nowsec < end_time:
        return diff
    else:
        return


class Signup(APIView):
    def get(self, request):
        return HttpResponse("This is Login Page")

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get('password')
        email1 = request.data.get('email1')
        email2 = request.data.get('email2')
        name1 = request.data.get('name1')
        name2 = request.data.get('name2')
        phone1 = request.data.get('phone1')
        phone2 = request.data.get('phone2')

        user = User.objects.create_user(username=username, password=password)

        userprofile = UserProfile(user=user, email1=email1, email2=email2, name1=name1, name2=name2, phone1=phone1,
                                  phone2=phone2)
        userprofile.save()

        return Response({"data": request.data, "token": AuthToken.objects.create(user)[1]}, status=201)


class Code(APIView):
    def get(self,request,qn):
        question = Question.objects.get(pk=qn)
        que_title = question.titleQue
        que = question.question
        #user = UserProfile.objects.get(user=request.user)
        data = {
            "user": "sanket",
            "question_title": que_title,
            "questin": que,
            "total": "100"
        }
        return JsonResponse(data)

    def post(self,request,qn):
        question = Question.objects.get(pk=qn)
        userprof = UserProfile.objects.get(user=request.user)




class LeaderBoard(APIView):

    def latest(self,data):
        player = UserProfile.objects.filter(user=data['user'])
        return player.latestSubTime


    def get(self, request):
        data = list()
        for player in UserProfile.objects.order_by("-totalScore"):
            l = {}
            l['user']=player.user.username
            for i in range(1, 7):
                que = Question.objects.get(pk=i)
                try:
                    ans = MultipleQues.objects.get(user=player.user, que=que)
                    l[f'q{i}']=ans.scoreQuestion
                except MultipleQues.DoesNotExist:
                    l[f'q{i}']=0
            l['total'] = player.totalScore
            l['color'] = "nonTrans"
            data.append(l)
            #sorted(data, key=lambda x: (player.latestSubTime))
        #data.sort(key=self.latest(data))
        return Response(data)


class Submissions(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, qn):
        que = Question.objects.get(pk=qn)
        total_submissions = Submission.objects.filter(user=request.user)
        usersub = []

        for submission in total_submissions:
            if (submission.que == que):
                usersub.append(submission)

        return Response({"submissions": usersub})


class Questionhub(APIView):
    #permission_classes = [IsAuthenticated]

    def get(self, request):
        '''try:
            user_profile = UserProfile.objects.get(user=request.user)
        except UserProfile.DoesNotExist:
            return HttpResponse("User profile does not exist")

        all_questions = Question.objects.all()
        all_users = User.objects.all()

        for que in all_questions:
            for user in all_users:
                try:
                    mul_que = MultipleQues.objects.get(user=user, que=que)
                except MultipleQues.DoesNotExist:
                    mul_que = MultipleQues(user=user, que=que)
                que.totalSub += 1 if mul_que.attempts > 0 else 0

            try:
                que.accuracy = round((que.totalSuccessfulSub * 100 / que.totalSub), 1)
            except ZeroDivisionError:
                que.accuracy = 0
        var = calculate()
        if var != 0:
            return Response({"all_questions": all_questions , 'time': var })'''
        all_ques = Question.objects.all()
        data = []
        for que in all_ques:
            detail = {
                "question_title":que.titleQue,
                "Accuracy":que.accuracy,
                "submissions":que.totalSuccessfulSub
            }
            data.append(detail)
        return JsonResponse(data,safe=False)


class Result(APIView):
    #result page : id of range,range,no. users in range
    def get(self,request):
        l = []
        d = {}
        for i in range(1,7):
            d["score{}".format(i)] = 0
        userprof = UserProfile.objects.all()
        for user in userprof:
            if user.totalScore <=100:
                d["score{}".format((user.totalScore-user.totalScore)+1)] = d["score{}".format((user.totalScore-user.totalScore)+1)] +1
            elif user.totalScore <=200:
                d["score{}".format((user.totalScore-user.totalScore)+2)] = d["score{}".format((user.totalScore-user.totalScore)+2)] +1
            elif user.totalScore <=300:
                d["score{}".format((user.totalScore-user.totalScore)+3)] = d["score{}".format((user.totalScore-user.totalScore)+3)] +1
            elif user.totalScore <=400:
                d["score{}".format((user.totalScore-user.totalScore)+4)] = d["score{}".format((user.totalScore-user.totalScore)+4)] +1
            elif user.totalScore <=500:
                d["score{}".format((user.totalScore-user.totalScore)+5)] = d["score{}".format((user.totalScore-user.totalScore)+5)] +1
            elif user.totalScore <=600:
                d["score{}".format((user.totalScore-user.totalScore)+6)] = d["score{}".format((user.totalScore-user.totalScore)+6)] +1

        for i in range(1,7):
            data = {}
            data['id'] = i
            data['range'] = "{}-{}".format((i-1)*100, i*100)
            data['usrs'] = d['score{}'.format(i)]
            l.append(data)

        return JsonResponse(l,safe=False)