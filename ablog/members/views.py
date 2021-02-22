from theblog.models import profile
from django.shortcuts import get_object_or_404, render
from django.views import generic
from django.contrib.auth.forms import PasswordChangeForm, UserChangeForm,UserCreationForm
from django.urls import reverse_lazy
from django.views.generic.edit import DeleteView
from django.views.generic import DetailView
from .forms import *
from django.contrib.auth.views import PasswordChangeView
from theblog.models import *

class createprofilepageview(generic.CreateView):
    model=profile
    form_class=profilepageform
    template_name='registration/create_user_profile_page.html'
    # fields='__all__'
    def form_valid(self,form):
        form.instance.user=self.request.user
        return super().form_valid(form)


class editprofilepageview(generic.UpdateView):
    model=profile
    template_name='registration/edit_profile_page.html'
    fields=['bio','profile_pic','website_url','facebook_url','twitter_url','instagram_url','linkedIn_url']
    success_url=reverse_lazy('home')


class showprofilepageview(DeleteView):
    model=profile
    template_name='registration/user_profile.html'
    
    def get_context_data(self,*args, **kwargs):
        # users=profile.objects.all()
        context=super(showprofilepageview,self).get_context_data(*args, **kwargs)
        page_user=get_object_or_404(profile,id=self.kwargs['pk'])
        context["page_user"]=page_user
        return context

               

def password_success(request):
    return render(request,'registration/password-success.html')


class passwordschangeview(PasswordChangeView):
    form_class=passwordchangeingform
    success_url=reverse_lazy('passwordsuccess')




class userregisterview(generic.CreateView):
    form_class=signupform
    template_name='registration/register.html'
    success_url=reverse_lazy('login')


class usereditview(generic.UpdateView):
    form_class=editprofileform
    template_name='registration/edit_profile.html'
    success_url=reverse_lazy('home')

    def get_object(self):
        return self.request.user
