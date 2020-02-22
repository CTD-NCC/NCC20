from django.shortcuts import redirect, reverse
from rest_framework.authentication import BaseAuthentication,SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from rest_framework.utils import json
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse, HttpResponse, HttpResponseRedirect
from datetime import datetime
import datetime
import os
import re
from seccomp.views import exec_main
from django.contrib.auth import login, logout
from django.contrib.auth.models import User

starttime = 0
end_time = 0
duration = 0
start = datetime.datetime(2020, 1, 1, 0, 0)
flag = False

pathusercode = 'data/usersCode/'
standard = 'data/standard/'
NO_OF_TEST_CASES = 6


def timer(request):
    global starttime, start
    global end_time
    global duration
    global flag
    flag = True
    duration = 7200
    start = datetime.datetime.now()
    start = start + datetime.timedelta(0, 15)
    time = start.second + start.minute * 60 + start.hour * 60 * 60
    starttime = time
    end_time = time + int(duration)
    return HttpResponse('Ready to go')


def calculate():
    time = datetime.datetime.now()
    nowsec = (time.hour * 60 * 60) + (time.minute * 60) + time.second
    global starttime
    global end_time
    diff = end_time - nowsec
    if nowsec < end_time:
        return diff
    else:
        return 0


def time(request):
    print(request.user)
    curr_time = calculate()
    hour = curr_time // (60 * 60)
    val = curr_time % (60 * 60)
    min = val // 60
    sec = val % 60
    return JsonResponse({"time": curr_time, "hh": str(hour), "mm": str(min), "ss": str(sec)})

@csrf_exempt
def check(request):
    username = request.data.get('username')
    print(username)
    data = {}
    data['exist'] = User.objects.filter(username__iexact=username).exists()
    return JsonResponse(data)


def getuser(username):
    user = User.objects.get(username=username)
    return user

class Signup(APIView):

    def get(self, request):
        username = request.META.get('HTTP_USERNAME')
        if not username:
            return redirect(reverse('signup'))
        else:
            return redirect(reverse('questionhub'))

    def post(self, request):
        receive = json.loads(request.body.decode("utf-8"))
        username = receive.get('userName')
        password = receive.get('password')
        email1 = receive.get('player1Email')
        email2 = receive.get('player2Email')
        name1 = receive.get('player1Name')
        name2 = receive.get('player2Name')
        phone1 = receive.get('player1Contact')
        phone2 = receive.get('player2Contact')
        junior = receive.get('year')
        user = User.objects.create_user(username=username, password=password)

        userprofile = UserProfile(user=user, email1=email1, email2=email2, name1=name1, name2=name2, phone1=phone1,
                                  phone2=phone2, junior=junior)  # level remaining
        user.save()
        userprofile.save()
        login(request, user)
        os.system(f'mkdir {pathusercode}/{username}')

        return Response({"data": request.data}, status=201)

def change_file_content(content, code_file):
    sandbox_header = '#include"../../../include/sandbox.h"\n'
    try:
        # Inject the function call for install filters in the user code file
        # Issue with design this way (look for a better solution (maybe docker))
        # multiple main strings
        before_main = content.split('main')[0] + 'main'
        after_main = content.split('main')[1]
        index = after_main.find('{') + 1
        main = before_main + after_main[:index] + \
            'install_filters();' + after_main[index:]
        with open(code_file, 'w+') as f:
            f.write(sandbox_header)
            f.write(main)
            f.close()

    except IndexError:
        with open(code_file, 'w+') as f:
            f.write(content)
            f.close()


class Code(APIView):

    def get(self, request, qn):
        # if request.user.is_authenticated:
        # qn =
        question = Question.objects.get(pk=qn)
        que_title = question.titleQue
        que = question.question
        #user = User.objects.get(user=request.user)

        data = {
            # "user": user.username,
            "question_title": que_title,
            "question": que,
            # "total": user.totalScore,
        }
        return JsonResponse(data)
        # else:
        #     return redirect(reverse('singup'))

    # ajax request for run and normal post request for submit
    def post(self, request, qn):
        receive = json.loads(request.body.decode("utf-8"))
        # if request.user.is_authenticated:
        question = Question.objects.get(pk=qn)
        #usr = request.user
        usr = User.objects.get(username="dummy")
        userprof = UserProfile.objects.get(user=usr)
        username = "dummy"
        content = receive.get('content')
        ext = receive.get('ext')
        #qn = request.POST['qn']
        qn = 3
        runflag = receive.get('runFlag')
        print(ext, runflag, content)

        try:
            mulque = MultipleQues.objects.get(user=usr, que=question)
        except MultipleQues.DoesNotExist:
            mulque = MultipleQues(user=usr, que=question)
        att = mulque.attempts

        user_code_path = f"{pathusercode}/{username}/question{qn}"

        if not os.path.exists(user_code_path):
            os.system(f"mkdir {user_code_path}")
        codefile = user_code_path + f"/code{att}.{ext}"

        change_file_content(content, codefile)

        testcase_values = exec_main(
            username=username,
            qno=qn,
            attempts=att,
            lang=ext,
            run=runflag
        )

        code_f = open(codefile, "w+")
        code_f.seek(0)
        code_f.write(content)
        code_f.close()

        if not runflag:
            now_time = datetime.datetime.now()
            now_time_sec = now_time.second + now_time.minute * 60 + now_time.hour * 60 * 60
            global starttime
            submit_Time = now_time_sec - starttime

            hour = submit_Time // (60 * 60)
            val = submit_Time % (60 * 60)
            min = val // 60
            sec = val % 60

            subTime = f'{hour}:{min}:{sec}'

            sub = Submission(code=content, user=usr,
                             que=question, attempt=att, subTime=subTime)

            mulque.attempts += 1
            mulque.save()

            error_text = ""
            epath = pathusercode + f"/{username}/question{qn}/error.txt"

            if os.path.exists(epath):
                err = open(epath, "r")
                error_text = err.read()
                error_text = re.sub('/.*?:', '', error_text)
                err.close()

            no_of_pass = 0
            for i in testcase_values:
                if i == 'AC':
                    no_of_pass += 1

            sub.correctTestCases = no_of_pass
            sub.TestCasesPercentage = (no_of_pass / NO_OF_TEST_CASES) * 100
            sub.save()

            status = 'AC' if no_of_pass == NO_OF_TEST_CASES else 'WA'  # overall Status
            sub.subStatus = status

            if status == 'AC':
                userprof.totalScore += 100
                question.totalSuccessfulSub += 1
                question.totalSub += 1
                sub.subScore = 100
                mulque.scoreQuestion = 100
                userprof.latestSubTime = subTime

            else:
                question.totalSub += 1
                sub.subScore = 0
                mulque.scoreQuestion = 0

            try:
                question.accuracy = round(
                    (question.totalSuccessfulSub * 100 / question.totalSub), 1)
            except ZeroDivisionError:
                question.accuracy = 0

            question.save()
            userprof.save()
            mulque.save()

            dict = {
                "testcases": testcase_values,
                "status": sub.subStatus,
                "error": error_text,
                "score": sub.subScore,
            }
        else:
            error_text = ""
            epath = pathusercode + f"/{username}/question{qn}/error.txt"
            if os.path.exists(epath):
                err = open(epath, "r")
                error_text = err.read()
                error_text = re.sub('/.*?:', '', error_text)
                err.close()

            dict = {
                "testcases": testcase_values,
                "error": error_text,
            }

        return JsonResponse(dict)

    # else:
    #     return HttpResponseRedirect(reverse('signup'))


class LeaderBoard(APIView):
    def get(self, request):
        data = []
        # if request.user.is_authenticated:
        for player in UserProfile.objects.order_by("-totalScore", "latestSubTime"):
            l = {
                'user': player.user.username,
                'total': player.totalScore,
                'color': "nonTrans"
            }
            for i in range(1, 7):
                que = Question.objects.get(pk=i)
                try:
                    ans = MultipleQues.objects.get(user=player.user, que=que)
                    l[f'q{i}'] = ans.scoreQuestion
                except MultipleQues.DoesNotExist:
                    l[f'q{i}'] = 0
            data.append(l)

        return JsonResponse(data,safe=False)
    # else:
    #     return HttpResponseRedirect(reverse('signup'))


class Submissions(APIView):
    def get(self, request, qn):
        # if request.user.is_authenticated:
        que = Question.objects.get(pk=qn)
        total_submissions = Submission.objects.filter(user=request.user)
        usersub = []

        for submission in total_submissions:
            if submission.que == que:
                usersub.append(submission)

        return Response({"submissions": usersub})
    # else:
    #     return HttpResponseRedirect(reverse('signup'))


class Questionhub(APIView):
    def get(self, request):
        #username = request.META.get('HTTP_USERNAME')
        print(request.META.get('HTTP_USERNAME'))
        # if request.user.is_authenticated:
        all_questions = Question.objects.all()
        data = []
        for que in all_questions:
            detail = {
                "sn": que.id,
                "title": que.titleQue,
                "accuracy": que.accuracy,
                "subm": que.totalSuccessfulSub
            }
            data.append(detail)

        return Response(data)
    # else:
    #     return HttpResponseRedirect(reverse('signup'))


class Result(APIView):
    def get(self, request):
        # if request.user.is_authenticated:
        l = []
        d = {}
        for i in range(1, 7):
            d["score{}".format(i)] = 0

        userprof = UserProfile.objects.all()
        for user in userprof:
            if user.totalScore <= 100:
                d["score{}".format((user.totalScore - user.totalScore) + 1)] = d["score{}".format(
                    (user.totalScore - user.totalScore) + 1)] + 1

            elif user.totalScore <= 200:
                d["score{}".format((user.totalScore - user.totalScore) + 2)] = d["score{}".format(
                    (user.totalScore - user.totalScore) + 2)] + 1

            elif user.totalScore <= 300:
                d["score{}".format((user.totalScore - user.totalScore) + 3)] = d["score{}".format(
                    (user.totalScore - user.totalScore) + 3)] + 1

            elif user.totalScore <= 400:
                d["score{}".format((user.totalScore - user.totalScore) + 4)] = d["score{}".format(
                    (user.totalScore - user.totalScore) + 4)] + 1

            elif user.totalScore <= 500:
                d["score{}".format((user.totalScore - user.totalScore) + 5)] = d["score{}".format(
                    (user.totalScore - user.totalScore) + 5)] + 1

            elif user.totalScore <= 600:
                d["score{}".format((user.totalScore - user.totalScore) + 6)] = d["score{}".format(
                    (user.totalScore - user.totalScore) + 6)] + 1

        for i in range(1, 7):
            data = {
                'id': i,
                'range': "{}-{}".format((i - 1) * 100, i * 100),
                'users': d['score{}'.format(i)]
            }
            l.append(data)

        logout(request)
        return Response(l)
    # else:
    #     return HttpResponseRedirect(reverse('signup'))


# function based
def garbage(request, garbage):
    if request.user.is_authenticated:
        logout(request)
        return HttpResponseRedirect(reverse('questionHub'))
    else:
        return HttpResponseRedirect(reverse("signup"))
