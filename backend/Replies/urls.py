from django.urls import path, include
from Replies import views

urlpatterns = [
    path('<int:comment_id>/', views.get_replies),
    path('create/', views.create_reply),
]

