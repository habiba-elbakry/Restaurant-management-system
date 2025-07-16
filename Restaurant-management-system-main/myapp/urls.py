from django.urls import path
from . import views

urlpatterns=[
    path('', views.home, name="home"),
    path('signin/', views.signin, name="signin"),
    path('signup/', views.signup, name="signup"),
    path('index/', views.index, name="index"),
    path('about/', views.about, name="about"),
    path('book/', views.book, name="book"),
    path('menu/',views.menu,name='menu'),
    path('menu_item/<int:pk>/', views.display_menu_item, name="menu_item"),
    path('rating/',views.rating,name='rating'),
    path('report/',views.report,name='report'),
    path('adding/',views.adding,name='adding'),
    path('vieworder/',views.vieworder,name='vieworder'),
    path('cancel/',views.cancel,name='cancel'),
]