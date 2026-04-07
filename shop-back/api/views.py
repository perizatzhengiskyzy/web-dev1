from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = category.products.filter(is_active=True)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer
    
    # Удаление неактивных продуктов
    @action(detail=False, methods=['delete'])
    def delete_inactive(self, request):
        #Удалить все неактивные продукты
        inactive_products = Product.objects.filter(is_active=False)
        count = inactive_products.count()
        inactive_products.delete()
        return Response({
            'message': f'Successfully deleted {count} inactive products',
            'deleted_count': count
        })
