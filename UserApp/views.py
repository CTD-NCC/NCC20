from django.shortcuts import render, redirect, reverse
from .models import *
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from knox.models import AuthToken


class signup(APIView):
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
