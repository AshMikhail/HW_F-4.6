from rest_framework import serializers
from .models import Recipes

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipes
        fields = ('category',)

class RecipesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipes
        fields = ('id', 'name', 'category', 'text')

class RecipeSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    category = serializers.CharField()
    text = serializers.CharField()
