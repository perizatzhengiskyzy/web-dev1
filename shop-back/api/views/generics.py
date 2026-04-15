from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer


# PRODUCTS
class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

    def destroy(self, request, *args, **kwargs):
        product = self.get_object()
        product.is_active = False  # soft delete
        product.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


# CATEGORIES
class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


# CATEGORY PRODUCTS (custom endpoint)
class CategoryProductsAPIView(APIView):
    def get(self, request, category_id):
        try:
            category = Category.objects.get(id=category_id)
        except Category.DoesNotExist:
            return Response(
                {"detail": "Category not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)