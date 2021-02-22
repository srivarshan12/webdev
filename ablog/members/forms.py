from django.contrib.auth.forms import PasswordChangeForm, UserChangeForm, UserCreationForm
from django.contrib.auth.models import User
from django import forms
from theblog.models import *

class profilepageform(forms.ModelForm):
    class Meta:
        model=profile
        fields=('bio','profile_pic','website_url','facebook_url','twitter_url','instagram_url','linkedIn_url')

        widgets={
                'bio': forms.Textarea(attrs={'class': 'form-control'}),
                # 'profile_pic': forms.TextInput(attrs={'class': 'form-control'}),      
                'website_url': forms.TextInput(attrs={'class': 'form-control'}),
                'facebook_url':forms.TextInput(attrs={'class': 'form-control'}),
                'twitter_url': forms.TextInput(attrs={'class': 'form-control'}),
                'instagram_url': forms.TextInput(attrs={'class': 'form-control'}),
                'linkedIn_url': forms.TextInput(attrs={'class': 'form-control'}),
            
            }
                    

class signupform(UserCreationForm):
    email=forms.EmailField(widget=forms.EmailInput(attrs={'class': 'form-control'}))
    first_name=forms.CharField(max_length=100,widget=forms.TextInput(attrs={'class': 'form-control'}))
    last_name=forms.CharField(max_length=100,widget=forms.TextInput(attrs={'class': 'form-control'}))

    class Meta:
        model=User
        fields=('username','first_name','last_name','email','password1','password2')


    def __init__(self,*args, **kwargs):
        super(signupform,self).__init__(*args, **kwargs)

        self.fields['username'].widget.attrs['class']='form-control'
        self.fields['password1'].widget.attrs['class']='form-control'
        self.fields['password2'].widget.attrs['class']='form-control'

class editprofileform(UserChangeForm):
    bio=forms.CharField(max_length=100,widget=forms.TextInput(attrs={'class': 'form-control'}))
    email=forms.EmailField(widget=forms.EmailInput(attrs={'class': 'form-control'}))
    first_name=forms.CharField(max_length=100,widget=forms.TextInput(attrs={'class': 'form-control'}))
    last_name=forms.CharField(max_length=100,widget=forms.TextInput(attrs={'class': 'form-control'}))
    username=forms.CharField(max_length=100,widget=forms.TextInput(attrs={'class': 'form-control'}))
    #last_login=forms.CharField(max_length=100,widget=forms.TextInput(attrs={'class': 'form-control'}))
    # is_staff=forms.CharField(max_length=100,widget=forms.CheckboxInput(attrs={'class': 'form-check'}))
    # is_active=forms.CharField(max_length=100,widget=forms.CheckboxInput(attrs={'class': 'form-check'}))
    # is_superuser=forms.CharField(max_length=100,widget=forms.CheckboxInput(attrs={'class': 'form-check'}))
    # date_joined=forms.CharField(max_length=100,widget=forms.TextInput(attrs={'class': 'form-control'}))
    
    class Meta:
        model=User
        fields=('username','first_name','last_name','email','bio')


class passwordchangeingform(PasswordChangeForm):
    old_password=forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control','type':'password'}))
    new_password1=forms.CharField(max_length=100,widget=forms.PasswordInput(attrs={'class': 'form-control','type':'password'}))
    new_password2=forms.CharField(max_length=100,widget=forms.PasswordInput(attrs={'class': 'form-control','type':'password'}))

    class Meta:
        model=User
        fields=('old_password','new_password1','new_password2')
