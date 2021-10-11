var input=document.getElementById("input");

var item=document.getElementsByClassName("item");
var listofitems=document.getElementById("listofitems");

var tickbtn=document.getElementById("tick-btn");
var tickbtnclass=document.getElementsByClassName("tick-btn");

var tickimg=document.getElementById("tick-img");

var active=document.getElementsByClassName("active");
var completed=document.getElementsByClassName("completed");

var clearcompleted=document.getElementById("clearcompleted");

var allitems=document.getElementById("allitems");

var activeitems=document.getElementById("activeitems");
var completeditems=document.getElementById("completeditems");


var footerlinks=document.getElementsByClassName("footerlinks");
var footeractive=document.getElementsByClassName("footeractive");

//set items left value initially
var noofitems=document.getElementById("noofitems");
noofitems.innerHTML=active.length+" items left";

var body=document.body;
var themechanger=document.getElementById("icon-sun-moon");
var sun=document.getElementById("sun");
var moon=document.getElementById("moon"); 
var bgchange=document.getElementById("bg-change");

var darktheme=true;

// bgchange.style.backgroundImage="url(./images/bg-desktop-dark.jpg)";

function mediacheck(x)
{
  if(x.matches)
  {
    console.log("Mobile");   
    themechanger.onclick=function(){
      body.classList.toggle('lighttheme');
      // bgchange.style.backgroundImage="url(./images/bg-mobile-dark.jpg)";
      
      if(darktheme==true)
      {
        bgchange.style.backgroundImage="url(./images/bg-mobile-light.jpg)";
        darktheme=false;
      }
      else{
        bgchange.style.backgroundImage="url(./images/bg-mobile-dark.jpg)";
        darktheme=true;
      
      }
    }
  }


  else{
    
    console.log("desktop");
    // bgchange.style.backgroundImage="url(./images/bg-desktop-dark.jpg)";
    themechanger.onclick=function(){
      body.classList.toggle('lighttheme');
      if(darktheme==true)
      {
        bgchange.style.backgroundImage="url(./images/bg-desktop-light.jpg)";
        darktheme=false;
      }

      else{
        bgchange.style.backgroundImage="url(./images/bg-desktop-dark.jpg)";
        darktheme=true;
      }
    }
  }

}


var x=window.matchMedia("(max-width: 375px)")
mediacheck(x);
x.addListener(mediacheck);



// filter objects
filterobjects("allitems");

function filterobjects(c)
{ var i;
  var x=document.getElementsByClassName('item');
  if(c === "allitems")
  { 
    c = "";
  }
  for(i=0; i< x.length; i++)
  {
    removeclass(x[i], "show");
    if (x[i].className.indexOf(c) > -1)  addclass(x[i], "show");
  }
  
}

function addclass(element,name)
{
  var i;
  var arr1=element.className.split(" ");
  var arr2=name.split(" ");
  for(i=0; i<arr2.length; i++)
  {
    if(arr1.indexOf(arr2[i]) == -1)
    {
      element.className +=  " " + arr2[i];
    }
  }
}


function removeclass(element, name)
{
  var i;
  var arr1=element.className.split(" ");
  var arr2=name.split(" ");
  for(i=0; i<arr2.length; i++)
  { 
    while(arr1.indexOf(arr2[i]) > -1)
    {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className=arr1.join(" ");
}



//change color for active items in footer
$('.footerlinks').on('click', function() {
	$('.footeractive').removeClass('footeractive');
	$(this).addClass('footeractive');
});





for(i=0;i<item.length;i++)
{
  var image=document.createElement("img");
  image.setAttribute("src","images/icon-cross.svg");
  image.setAttribute("id","cross-img");  
  item[i].appendChild(image);

  
  //clear completed
  clearcompleted.onclick=function(){
      for(i=0;i<completed.length;i++)
      {
        completed[i].style.display="none";
        console.log("completed cleared")
      }
  }


  //click the item to strike it
  tickbtnclass[i].onclick=function(){    

    this.parentNode.classList.toggle('completed');
    this.parentNode.classList.toggle('active');
    // console.log("item clicked");
    // console.log(this.parentNode.classList);

    var active=document.getElementsByClassName("active");
    noofitems.innerHTML=active.length+" items left";
  }


  //cross-img click
  image.onclick=function(){
    console.log()
    if(this.parentNode.classList.contains('active'))
    {
      this.parentNode.classList.remove('active');
    }
    this.parentNode.style.display="none";
    console.log("close btn clicked and active class removed");
    var active=document.getElementsByClassName("active");
    noofitems.innerHTML=active.length+" items left";
  }

}



input.addEventListener("keyup",function(event){
  if(event.keyCode===13)    //submit on pressing enter
  {
    event.preventDefault();
    if(input.value==="" || input.value===null)
    {
      alert("Please enter something");
    }
    else{
      document.getElementById("submit-btn").click();
      
      var newarticle=document.createElement("article");
      newarticle.setAttribute("class","item allitems active");

      var btn=document.createElement("button");
      btn.setAttribute("id","tick-btn");
      btn.setAttribute("class","tick-btn");

      var image=document.createElement("img");
      image.setAttribute("src","images/icon-check.svg");
      image.setAttribute("id","tick-img");
      image.setAttribute("alt","tick-img");
      btn.appendChild(image);

      newarticle.appendChild(btn);

      var p=document.createElement("p");
      p.innerHTML=input.value;
      newarticle.appendChild(p);

      listofitems.appendChild(newarticle);
      input.value="";
      
      var image=document.createElement("img");
      image.setAttribute("src","images/icon-cross.svg");
      image.setAttribute("id","cross-img");
      image.setAttribute("align","left");
      image.setAttribute("alt","cross-img");

      newarticle.appendChild(image);
      
      var noofitems=document.getElementById("noofitems");
      noofitems.innerHTML=active.length+" items left";


      image.onclick=function(){
        this.parentNode.style.display="none";
        this.parentNode.classList.remove('active');
        var active=document.getElementsByClassName("active");    
        noofitems.innerHTML=active.length+" items left";
      }

      clearcompleted.onclick=function(){
        for(i=0;i<completed.length;i++)
        {
          completed[i].style.display="none";
          console.log("completed cleared");      
        }
      }

      btn.onclick=function(){    

        this.parentNode.classList.toggle('completed');
        this.parentNode.classList.toggle('active');
        console.log("item clicked")
        console.log(this.parentNode.classList);
    
        var active=document.getElementsByClassName("active");
        noofitems.innerHTML=active.length+" items left";
      }
    
    
      filterobjects("allitems");

      function filterobjects(c)
      { var i;
        var x=document.getElementsByClassName('item');
        if(c === "allitems") c = "";
        for(i=0; i< x.length; i++)
        {
          removeclass(x[i], "show");
          if (x[i].className.indexOf(c) > -1)  addclass(x[i], "show");
        }
      }
      
      function addclass(element,name)
      {
        var i;
        var arr1=element.className.split(" ");
        var arr2=name.split(" ");
      
        for(i=0; i<arr2.length; i++)
        {
          if(arr1.indexOf(arr2[i]) == -1)
          {
            element.className +=  " " + arr2[i];
          }
        }
        console.log("inside of add");
      }
      
      
      function removeclass(element, name)
      {
        var i;
        var arr1=element.className.split(" ");
        var arr2=name.split(" ");
        console.log(arr2);
        for(i=0; i<arr2.length; i++)
        { 
          while(arr1.indexOf(arr2[i]) > -1)
          {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
        }
        element.className=arr1.join(" ");
        console.log("inside  of remove")
      
      }
      
      
        

        
    }
  }
});





