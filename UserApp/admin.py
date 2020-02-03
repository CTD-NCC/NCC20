from django.contrib import admin
from .models import *

admin.site.register(Question)
admin.site.register(Submission)
admin.site.register(UserProfile)
admin.site.register(MultipleQues)

# Register your models here.
