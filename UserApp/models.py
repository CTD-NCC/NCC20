from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import CustomUserManager


class UserProfile(AbstractUser):
    username = models.CharField(max_length=20, unique=True)
    totalScore = models.IntegerField(default=0)
    email1 = models.EmailField(default='example@gmail.com')
    email2 = models.EmailField(default='example@gmail.com', null=True, blank=True)
    phone1 = models.CharField(max_length=10)
    phone2 = models.CharField(max_length=10, null=True, blank=True, default='0000000000')
    name1 = models.CharField(max_length=100)
    name2 = models.CharField(max_length=100, null=True, blank=True, default='Player2')
    junior = models.BooleanField(default=True)  # True if Junior(FE) else False if Senior(SE,TE,BE)
    latestSubTime = models.TimeField(default='00:00')
    timer = models.TimeField(default='00:00')

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = [username, name1, phone1, email1]

    objects = CustomUserManager()

    def __str__(self):
        return self.username


class Question(models.Model):
    titleQue = models.CharField(max_length=50)
    question = models.CharField(max_length=5000)
    totalSub = models.IntegerField(default=0)
    totalSuccessfulSub = models.IntegerField(default=0)
    accuracy = models.IntegerField(default=0)

    def __str__(self):
        return self.titleQue


class MultipleQues(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    que = models.ForeignKey(Question, on_delete=models.CASCADE)
    scoreQuestion = models.IntegerField(default=0)
    attempts = models.IntegerField(default=0)


class Submission(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    que = models.ForeignKey(Question, on_delete=models.CASCADE)
    code = models.CharField(max_length=1000)                 # Current Attempt
    subStatus = models.CharField(default='NA', max_length=5)    # four type of submission status(WA, PASS, TLE, CTE)
    subTime = models.CharField(default='', max_length=50)
    subScore = models.IntegerField(default=0)
    correctTestCases = models.IntegerField(default=0)
    TestCasesPercentage = models.IntegerField(default=0)
