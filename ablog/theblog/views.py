from typing import ContextManager
from django.shortcuts import render,get_object_or_404
from django.urls.base import reverse_lazy,reverse
from django.views.generic import ListView,DetailView,CreateView,UpdateView,DeleteView
from .models import *
from .forms import *
from django.http import HttpResponseRedirect
# def home(request):
#     return render(request, 'home.html',{})
def likeview(request,pk):
    post1=get_object_or_404(post,id=request.POST.get('post_id'))        
    liked=False
    if post1.likes.filter(id=request.user.id).exists():
        post1.likes.remove(request.user)
    else:
        post1.likes.add(request.user)
        liked=True

    return HttpResponseRedirect(reverse('article',args=[str(pk)]))

class homeview(ListView):
    model=post
    template_name='home.html'
    # ordering=['-id']
    ordering=['-post_date']

    def get_context_data(self,*args, **kwargs):
        cat_menu=Category.objects.all()
        context=super(homeview,self).get_context_data(*args, **kwargs)
        context["cat_menu"]=cat_menu
        return context
                
def categorylistview(request):
    cat_menu_list=Category.objects.all()
        
    # category_posts= post.objects.filter(category=cats.replace("-"," "))
    context={'cat_menu_list':cat_menu_list}
    return render(request,'category_list.html',context)

            
def categoryview(request,cats):
    category_posts= post.objects.filter(category=cats.replace("-"," "))
    context={'category_post':category_posts,"cats":cats.title().replace("-"," ")}
    return render(request,'categories.html',context)


class articledetailview(DetailView):
    model =post
    template_name='article_details.html' 

    def get_context_data(self,*args, **kwargs):
        cat_menu=Category.objects.all()
        context=super(articledetailview,self).get_context_data(*args, **kwargs)
        
        stuff=get_object_or_404(post,id=self.kwargs['pk'])
        total_likes= stuff.total_likes()
        liked=False
        if stuff.likes.filter(id=self.request.user.id).exists():
            liked=True
        
        context["cat_menu"]=cat_menu
        context["total_likes"]=total_likes
        context["liked"]=liked
        return context

class addpostview(CreateView):
    model=post
    form_class = postform
    template_name='add_post.html'
    # fields='__all__'
    # fields=('title','body')
    

class addcommentview(CreateView):
    model=comment
    form_class = commentform
    template_name='add_comment.html'
    ordering=['-date_added']

    # fields='__all__'
    def form_valid(self,form):
        form.instance.post_id=self.kwargs['pk']
        return super().form_valid(form)
    
    success_url=reverse_lazy('home')    



class addcategoryiew(CreateView):
    model=Category
    # form_class = postform
    template_name='add_category.html'
    fields='__all__'
    # fields=('title','body')

class updatepostview(UpdateView):
    model=post
    form_class = editform
    template_name="update_post.html"
    # fields=['title','title_tag','body']

class deletepostview(DeleteView):
    model=post
    template_name="delete_post.html"
    success_url=reverse_lazy('home')    

