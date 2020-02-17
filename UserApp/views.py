from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from knox.models import AuthToken
import datetime, os, re

from seccomp.views import exec_main

starttime = 0
end_time = 0
duration = 0
start = datetime.datetime(2020, 1, 1, 0, 0)

path_usercode = 'data/usersCode/'
standard = 'data/standard/'


def timer():
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


class Signup(APIView):
    def get(self, request):
        timer()
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

        os.system(f'mkdir {path_usercode}/{username}')

        return Response({"data": request.data}, status=201)


class Code(APIView):
    def get(self, request, qn):
        question = Question.objects.get(pk=qn)
        que_title = question.titleQue
        que = question.question
        user = User.objects.get(user=request.user)

        var = calculate()
        data = {
            "user": user.username,
            "question_title": que_title,
            "questin": que,
            "total": "100",
            "time": var
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
            mulque.save()
        att = mulque.attempts
        mulque.attempts = mulque.attempts+1
        mulque.save()

        user_code_path = f"{path_usercode}/{username}/question{qn}"
        if not os.path.exists(user_code_path):
            os.system(f"mkdir {user_code_path}")

        codefile  = user_code_path + f"code{att}.{ext}"
        content = str(content)

        change_file_content(content,ext,codefile)

        testcase_val = exec_main(
            username=username,
            qno = qn,
            attempts=att,
            lang=ext
        )

        code_f = open(codefile, "w+")
        code_f.seek(0)
        codefile.write(content)
        code_f.close()

        error_text = ""
        epath = path_usercode + f"/{username}/question{qn}/error.txt"

        if os.path.exists(epath):
            err = open(epath,"r")
            error_text = err.read()
            error_text = re.sub('/.*?:','',error_text)
            err.close()






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

            var = calculate()
            l['time'] = var
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

        var = calculate()
        return Response({"submissions": usersub, "time": var})


class Questionhub(APIView):
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
        var = calculate()
        for que in all_ques:
            detail = {
                "question_title": que.titleQue,
                "Accuracy": que.accuracy,
                "submissions": que.totalSuccessfulSub,
                "time": var
            }
            data.append(detail)
        return JsonResponse(data, safe=False)


class Result(APIView):
    def get(self):
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

            var = calculate()
            data['time'] = var
            l.append(data)

        return JsonResponse(l, safe=False)


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
