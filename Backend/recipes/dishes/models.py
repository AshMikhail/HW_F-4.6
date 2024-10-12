from django.db import models


class Recipes(models.Model):
    CATEGORY = [
        ('Первые блюда', 'Первые блюда'),
        ('Вторые блюда', 'Вторые блюда'),
        ('Десерты', 'Десерты'),
    ]
    category = models.CharField(max_length=15, choices=CATEGORY, default='FC', verbose_name='Категория')
    name = models.CharField(max_length=256, verbose_name='Название блюда')
    text = models.TextField(verbose_name='Рецепт блюда')
    dateCreation = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Рецепты'
        verbose_name = 'Рецепт'

    def __str__(self):
        return f'{self.name} | {self.category}'
