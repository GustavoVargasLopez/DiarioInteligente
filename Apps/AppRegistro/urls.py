from rest_framework import routers

from .viewsets import RegistroViewSet,Registro1ViewSet

router = routers.SimpleRouter()
router.register('persona', RegistroViewSet)
router.register('usuario', Registro1ViewSet)

urlpatterns = router.urls
