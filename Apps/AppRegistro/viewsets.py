from rest_framework import viewsets
from .models import Persona, Usuario
from .serializer import PersonaSerializer,UsuarioSerializer

class RegistroViewSet(viewsets.ModelViewSet):
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer

class Registro1ViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer