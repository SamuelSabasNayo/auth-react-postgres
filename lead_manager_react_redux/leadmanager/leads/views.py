from rest_framework import generics, mixins, viewsets, permissions

from leads.models import Lead
from .serializers import LeadSerializer


class LeadViewSet(generics.GenericAPIView,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin):
    queryset = Lead.objects.all()
    serializer_class =  LeadSerializer
    # permission_classes = [
    # permissions.IsAuthenticated
    # ]

    lookup_field = 'id'

    def get(self, request, id=None):

        if id:
            return self.retrieve(request)

        else:
            return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, id=None):
        return self.update(request, id)

    def delete(self, request, id):
        return self.destroy(request, id)
