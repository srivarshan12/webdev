from django.shortcuts import render,redirect
from django.core.mail import send_mail
# Create your views here.

def index(request):
    if request.method=="POST":

        fromemail=request.POST['senderemail']
        name=request.POST['sendername']
        subject=request.POST['sendersubject']
        message=request.POST['sendermessage']

        send_mail(
            'Message from '+ name,  #subject
            'Subject: '+subject+"\n"+'Email id :'+fromemail+"\n"+message,
            fromemail,
            ['srivarshan1206@gmail.com'],
        )

        return redirect('index')
    else:
        return render(request,'index.html',{})
