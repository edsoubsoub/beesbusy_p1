# exceptions.py

from rest_framework.views import exception_handler
from rest_framework.exceptions import NotFound, ValidationError
from django.http import Http404, JsonResponse

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if isinstance(exc, Http404):
        return JsonResponse({"detail": "Not found"}, status=404)

    if response is not None:
        return response

    return JsonResponse({"detail": str(exc)}, status=500)
