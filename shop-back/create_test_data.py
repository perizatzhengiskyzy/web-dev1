import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

# Проверяем текущее состояние
print(f"Текущее состояние:")
print(f"  Категории: {Category.objects.count()}")
print(f"  Продукты: {Product.objects.count()}")

# Добавляем недостающую категорию Sports, если ее нет
if Category.objects.count() < 4:
    Category.objects.create(name='Sports')
    print("Добавлена категория Sports")

# Проверяем, сколько продуктов нужно добавить
current_products = Product.objects.count()
if current_products < 20:
    # Получаем категории
    categories = {cat.name: cat for cat in Category.objects.all()}
    
    # Создаем недостающие продукты
    products_to_add = []
    
    # Electronics продукты
    electronics_products = [
        ('Gaming Laptop', 1299.99, 'High-performance gaming laptop', 10),
        ('Smartphone Pro', 899.99, 'Latest flagship smartphone', 20),
        ('Wireless Earbuds', 149.99, 'Noise-canceling earbuds', 50),
        ('4K Monitor', 399.99, '27-inch 4K UHD monitor', 15),
        ('Mechanical Keyboard', 129.99, 'RGB gaming keyboard', 30),
    ]
    
    # Clothing продукты
    clothing_products = [
        ('Premium Hoodie', 59.99, 'Comfortable cotton hoodie', 75),
        ('Slim Fit Jeans', 69.99, 'Stretch denim jeans', 45),
        ('Leather Jacket', 199.99, 'Genuine leather jacket', 20),
        ('Running Shoes', 89.99, 'Lightweight running shoes', 100),
        ('Wool Scarf', 34.99, 'Soft winter scarf', 60),
    ]
    
    # Books продукты
    books_products = [
        ('Clean Code', 54.99, 'Agile software craftsmanship', 25),
        ('The Pragmatic Programmer', 49.99, 'From journeyman to master', 30),
        ('Design Patterns', 64.99, 'Object-oriented design patterns', 20),
        ('Python Crash Course', 39.99, 'Hands-on Python introduction', 35),
        ('Django for Beginners', 44.99, 'Web development with Django', 28),
    ]
    
    # Sports продукты
    sports_products = [
        ('Mountain Bike', 599.99, '26-inch mountain bike', 8),
        ('Fitness Tracker', 79.99, 'Smart fitness tracker', 45),
        ('Exercise Bike', 399.99, 'Stationary exercise bike', 10),
        ('Yoga Mat', 29.99, 'Non-slip yoga mat', 80),
        ('Dumbbell Set', 89.99, 'Adjustable dumbbells', 30),
    ]
    
    # Добавляем продукты для каждой категории
    for name, price, desc, count in electronics_products:
        if 'Electronics' in categories:
            Product.objects.get_or_create(
                name=name,
                defaults={
                    'price': price,
                    'description': desc,
                    'count': count,
                    'is_active': True,
                    'category': categories['Electronics']
                }
            )
    
    for name, price, desc, count in clothing_products:
        if 'Clothing' in categories:
            Product.objects.get_or_create(
                name=name,
                defaults={
                    'price': price,
                    'description': desc,
                    'count': count,
                    'is_active': True,
                    'category': categories['Clothing']
                }
            )
    
    for name, price, desc, count in books_products:
        if 'Books' in categories:
            Product.objects.get_or_create(
                name=name,
                defaults={
                    'price': price,
                    'description': desc,
                    'count': count,
                    'is_active': True,
                    'category': categories['Books']
                }
            )
    
    for name, price, desc, count in sports_products:
        if 'Sports' in categories:
            Product.objects.get_or_create(
                name=name,
                defaults={
                    'price': price,
                    'description': desc,
                    'count': count,
                    'is_active': True,
                    'category': categories['Sports']
                }
            )
    
    print(f"Добавлены недостающие продукты")

# Показываем финальное состояние
print(f"\nФинальное состояние:")
print(f"  Категории: {Category.objects.count()}")
print(f"  Продукты: {Product.objects.count()}")

for cat in Category.objects.all():
    prod_count = Product.objects.filter(category=cat).count()
    print(f"  {cat.name}: {prod_count} продуктов")
