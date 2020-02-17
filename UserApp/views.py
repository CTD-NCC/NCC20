from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse,HttpResponse
from knox.models import AuthToken
from datetime import datetime
import os, subprocess,re
from seccomp.views import exec_main

starttime = 0
end_time = 0

pathusercode = 'data/usersCode/'
standard = 'data/standard/'
NO_OF_TEST_CASES = 6

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
    #def get(self, request):

    def post(self, request):
        username = request.POST("username")
        password = request.POST('password')
        email1 = request.POST('email1')
        email2 = request.POST('email2')
        name1 = request.POST('name1')
        name2 = request.POST('name2')
        phone1 = request.POST('phone1')
        phone2 = request.POST('phone2')
        junior = request.POST('junior')

        user = User.objects.create_user(username=username, password=password)

        userprofile = UserProfile(user=user, email1=email1, email2=email2, name1=name1, name2=name2, phone1=phone1,
                                  phone2=phone2,junior=junior)
        userprofile.save()
        os.system(f'mkdir {pathusercode}/{username}')

        return Response({"data": request.data, "token": AuthToken.objects.create(user)[1]}, status=201)


class Code(APIView):
    def get(self, request, qn):
        question = Question.objects.get(pk=qn)
        que_title = question.titleQue
        que = question.question
        user = User.objects.get(user=request.user)
        data = {
            "user": user.username,
            "question_title": que_title,
            "questin": que,
            "total": user.totalScore
        }
        return JsonResponse(data)

    def post(self,request,qn):
        question = Question.objects.get(pk=qn)
        usr = request.user
        userprof = UserProfile.objects.get(user=usr)
        username = userprof.user.username
        content = request.POST['content']
        ext = request.POST['ext']

        try:
            mulque = MultipleQues.objects.get(user=usr,que=question)
        except MultipleQues.DoesNotExist:
            mulque = MultipleQues(user=usr,que=question)
        att = mulque.attempts

        user_code_path = f"{pathusercode}/{username}/question{qn}"
        if not os.path.exists(user_code_path):
            os.system(f"mkdir {user_code_path}")

        codefile  = user_code_path + f"code{att}.{ext}"
        content = str(content)

        change_file_content(content,ext,codefile)

        testcase_values = exec_main(
            username=username,
            qno = qn,
            attempts = att,
            lang = ext
        )

        code_f = open(codefile,"w+")
        code_f.seek(0)
        codefile.write(content)
        code_f.close()

        now_time = datetime.datetime.now()
        now_time_sec = now_time.second + now_time.minute * 60 + now_time.hour * 60 * 60
        global starttime
        submit_Time = now_time_sec - starttime

        hour = submit_Time // (60 * 60)
        val = submit_Time % (60 * 60)
        min = val // 60
        sec = val % 60

        subTime = f'{hour}:{min}:{sec}'

        sub = Submission(code=content, user=usr, que=question, attempt=att, subTime=subTime)

        mulque.attempts += 1
        mulque.save()

        error_text = ""
        epath = pathusercode + f"/{username}/question{qn}/error.txt"

        if os.path.exists(epath):
            err = open(epath,"r")
            error_text = err.read()
            error_text = re.sub('/.*?:','',error_text)
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

        else:
            question.totalSub += 1
            sub.subScore = 0
            mulque.scoreQuestion = 0

        try:
            question.accuracy = round((question.totalSuccessfulSub * 100 / question.totalSub), 1)
        except ZeroDivisionError:
            question.accuracy = 0

        question.save()
        userprof.save()
        mulque.save()
        dict = {
            "testcases" : testcase_values,
            "status" : sub.subStatus,
            "error" : error_text,
            "score" : sub.subStatus,
        }

        return JsonResponse(dict)


class LeaderBoard(APIView):
    def latest(self, data):
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
                    l[f'q{i}'] = ans.scoreQuestion
                except MultipleQues.DoesNotExist:
                    l[f'q{i}'] = 0

            l['total'] = player.totalScore
            l['color'] = "nonTrans"
            data.append(l)
        return Response(data)


class Submissions(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, qn):
        que = Question.objects.get(pk=qn)
        total_submissions = Submission.objects.filter(user=request.user)
        usersub = []

        for submission in total_submissions:
            if submission.que == que:
                usersub.append(submission)

        return Response({"submissions": usersub})


class Questionhub(APIView):
    def get(self, request):
        all_questions = Question.objects.all()
        data = []

        for que in all_questions:
            detail = {
                "question_title": que.titleQue,
                "accuracy": que.accuracy,
                "submissions": que.totalSuccessfulSub
            }
            data.append(detail)
        return JsonResponse(data, safe=False)


class Result(APIView):
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


def change_file_content(content, code_file):
    sandbox_header = '#include"../../../include/sandbox.h"\n'
    try:
        # Inject the function call for install filters in the user code file
        # Issue with design this way (look for a better solution (maybe docker))
        # multiple main strings
        before_main = content.split('main')[0] + 'main'
        after_main = content.split('main')[1]
        index = after_main.find('{') + 1
        main = before_main + after_main[:index] + 'install_filters();' + after_main[index:]
        with open(code_file, 'w+') as f:
            f.write(sandbox_header)
            f.write(main)
            f.close()

    except IndexError:
        with open(code_file, 'w+') as f:
            f.write(content)
            f.close()
