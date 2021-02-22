from django import forms
from .models import *

# choices=[('coding','coding'),('sports','sports'),('entertainment','entertainment'),]
choices=Category.objects.all().values_list('name','name')

choice_list=[]

for item in choices:
    choice_list.append(item)


class postform(forms.ModelForm):
    class Meta:
        model=post
        fields=('title','author','category','body','snippet','header_image')
    
        widgets={
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'title_tag': forms.TextInput(attrs={'class': 'form-control'}),      
            # 'author': forms.Select(attrs={'class': 'form-control'}),
            'author': forms.TextInput(attrs={'class': 'form-control','value':'','id':'elder','type':'hidden'}),
            'category':forms.Select(choices=choice_list ,attrs={'class': 'form-control'}),
            'body': forms.Textarea(attrs={'class': 'form-control'}),
            'snippet': forms.Textarea(attrs={'class': 'form-control'}),
           
        }

class editform(forms.ModelForm):
    class Meta:
        model=post
        fields=('title','title_tag','body','snippet')
    
    widgets={
        'title': forms.TextInput(attrs={'class': 'form-control'}),
        'title_tag': forms.TextInput(attrs={'class': 'form-control'}),
        # 'author': forms.Select(attrs={'class': 'form-control'}),
        'body': forms.Textarea(attrs={'class': 'form-control'}),
        'snippet':forms.Textarea(attrs={'class': 'form-control'}),
           
    }

class commentform(forms.ModelForm):
    class Meta:
        model=comment
        fields=('name','body')
    
    widgets={
        'name': forms.TextInput(attrs={'class': 'form-control'}),
        'body': forms.Textarea(attrs={'class': 'form-control'}),   
    }
