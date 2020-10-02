from django.db import models

class Usuario(models.Model):
    Email = models.EmailField(primary_key=True)
    Contra = models.CharField(max_length=25)
    TipoUsuario = models.CharField(max_length=15)

class Persona(models.Model):
    Nombre = models.CharField(max_length=40)
    ApellidoPaterno = models.CharField(max_length=35)
    ApellidoMaterno = models.CharField(max_length=35)
    Sexo = models.CharField(max_length=5)
    Fecha_Nac = models.DateField()
    Telefono = models.CharField(max_length=11)
    Email = models.EmailField(unique=True)


