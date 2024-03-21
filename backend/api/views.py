from rest_framework import generics, status
from rest_framework.exceptions import NotFound, ValidationError
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import User
from .serializers import UserSerializer
import logging

class UserListCreateAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = User.objects.all()
        if not queryset.exists():
            raise NotFound(detail="Users not found", code=status.HTTP_404_NOT_FOUND)
        return queryset

    #TODO Ne rentre pas dans User.DoesNotExist ni ObjectDoesNotExist
    def get_object(self):
        try:
            return super().get_object()
        except User.DoesNotExist:
            raise NotFound(detail="User not found", code=status.HTTP_404_NOT_FOUND)
        except ObjectDoesNotExist:
            raise NotFound(detail="User not found", code=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            raise NotFound(detail="User not found", code=status.HTTP_404_NOT_FOUND)

    def perform_create(self, serializer):
        try:
            serializer.save()
        except ValidationError as e:
            raise ValidationError(detail=e.detail, code=status.HTTP_400_BAD_REQUEST)

    def perform_destroy(self, instance):
        try:
            instance.delete()
        except Exception as e:
            raise ValidationError(detail=str(e), code=status.HTTP_400_BAD_REQUEST)

class UserSearchAPIView(generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = User.objects.all()
        
        # Récupérer les paramètres de requête pour les critères de recherche
        name = self.request.query_params.get('username', None)
        email = self.request.query_params.get('email', None)
        age = self.request.query_params.get('age', None)

        # Appliquer les filtres en fonction des critères fournis
        if name:
            queryset = queryset.filter(username__icontains=name)
        if email:
            queryset = queryset.filter(email__icontains=email)
        if age:
            queryset = queryset.filter(userprofile__age=age)
        
        return queryset
