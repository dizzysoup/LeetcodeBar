from django.shortcuts import render
from .models import User
from .serializer import UserSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # GET 
    def list(self, request, **kwargs):
        user = User.objects.all()
        serializer = UserSerializer(user, many = True)
        return Response(serializer.data , status=status.HTTP_200_OK)

    # POST 
    def create(self, request, **kwargs):
        data = request.data 
        
        serializer = UserSerializer(data = data)
        if serializer.is_valid():
            return Response(serializer.data , status=status.HTTP_201_CREATED)
        else :
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    # DELETE 
    def destory(self , request , sid=None , **kwargs):
        try:
            user = User.objects.get(SID=sid)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
