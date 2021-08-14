from django.shortcuts import render,redirect
from django.core.mail import send_mail
from django.db import models
from .models import *



# Create your views here.
def index(request):

    if request.method=="POST":
            email=request.POST.get('newsletteremail')
            print(email)
            if Newsletter.objects.filter(name=email).exists():
                message=email+" already exists"
                print(message)  

                return render(request,'index.html',{})

            else:
                new = Newsletter(name=email)
                new.save()
                message=email+"added successfully"
                print(message)  
                return render(request,'index.html',{})

    return render(request,'index.html',{})


def gallery(request):
    return render(request,'gallery.html',{})

def aboutus(request):
    return render(request,'aboutus.html',{})

def contact(request):
    if request.method=="POST":
        if request.POST.get('name') and request.POST.get('email') and request.POST.get('subject') and request.POST.get('message'):
            print("send button clicked")
            sendername=request.POST['name']
            senderemail=request.POST['email']
            sendersubject=request.POST['subject']
            sendermessage=request.POST['message']
            send_mail(
                'Message from '+sendername ,
                'Subject: '+sendersubject + "\n" +'Email: '+ senderemail +"\n" +sendermessage,
                senderemail,
                ['srivarshan1206@gmail.com'],
            )
            print("Email sent")
            return render(request,'contact.html',{"sendername":sendername})
        else:
            email=request.POST.get('newsletteremail')
            print(email)
            if Newsletter.objects.filter(name=email).exists():
                message=email+" already exists"
                print(message)  

                return render(request,'contact.html',{"message":message})

            else:
                new = Newsletter(name=email)
                new.save()
                message=email+" added successfully"
                print(message)  
                return render(request,'contact.html',{"message":message})

    else:
            return render(request,'contact.html',{})
    



def service(request):
    return render(request,'service.html',{})

def shop(request):
    shop=Shop.objects.all()
    context={"shop":shop}    
    return render(request,'shop.html',context)
    
def cart(request):
    return render(request,'cart.html',{})

def checkout(request):
    return render(request,'checkout.html',{})
