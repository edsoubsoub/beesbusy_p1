from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['hometown', 'age', 'gender']

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(source='userprofile')  # Inclure le profil utilisateur

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'profile']
