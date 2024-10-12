from .models import Recipes
from .serializers import RecipesSerializer, CategorySerializer, RecipeSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

class RecipesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Recipes.objects.values('category').distinct()  # Извлечение уникальных значений поля
    serializer_class = CategorySerializer


@api_view(['GET'])
def RecipeView(request):
        recipes = Recipes.objects.filter(category=request.query_params['category'])
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)




# class CategoryViewSet(APIView):
#     def get(self, request):
#         queryset = Recipes.objects.all()
#         serializer_class = CategorySerializer(
#             instance=queryset,
#             many=True
#         )
#         return Response(serializer_class.data)

# class RecipeViewSet(viewsets.ModelViewSet):
#     queryset = Recipes.objects.all()
#     serializer_class = RecipeSerializer
#     def get_queryset(self):
#         queryset = Recipes.objects.all()
#         category = self.request.query_params.get('category', None)
#         if category is not None:
#             queryset = queryset.filter(category=category)
#         return queryset
@api_view(['GET'])
def dishes_view(request):
    if request.method == 'GET':
        dishes = Dishes.objects.filter(categoryType=request.query_params['category'])
        serializer = DishesSerializer(dishes, many=True)
        return Response(serializer.data)