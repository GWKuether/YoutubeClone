from django.urls import path, include
from Comments import views

urlpatterns = [
    path('', views.user_comments),
    path('all/', views.get_all_comments),
    path('<str:video_id>/', views.get_video_id_comments),
]

