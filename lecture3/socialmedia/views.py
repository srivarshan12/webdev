from django.shortcuts import render
from django.http import HttpResponse

from bs4 import BeautifulSoup 
import requests 



# Create your views here.



def index(request):
    try:
        URL = "https://www.instagram.com/{}/"
        # username = request.POST.get('result', None)
        # result = request.GET.get('result', None)
 
        # username=result
        # username = input("enter username: ")
        username = request.POST["usernameee"]
        r = requests.get(URL.format(username)) 
        s = BeautifulSoup(r.text, "html.parser") 
        meta = s.find("meta", property ="og:description")
        s=meta.attrs['content'].split("-")[0]
        s=s.split(" ")
        # posts=s[4]
        # follower=s[0]
        # following=s[2]
    except:
        print("invalid username ,enter correct username ")    

    return render(request,"index.html",{
        "usernames":username,"follower":s[0],"following":s[2]

     
})
