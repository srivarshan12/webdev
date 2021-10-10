var input=document.getElementById("input");

var item=document.getElementsByClassName("item");
var listofitems=document.getElementById("listofitems");

var checkbtn=document.getElementById("check-btn");
var checkbtnclass=document.getElementsByClassName("check-btn");

var checkimg=document.getElementById("check-img");

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
bgchange.style.backgroundImage="url(./images/bg-desktop-dark.jpg)";

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

// filter objects


filterobjects("all");

function filterobjects(c)
{ var i;
  var x=document.getElementsByClassName('item');
  if(c === "all")
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
  checkbtnclass[i].onclick=function(){    

    this.parentNode.classList.toggle('completed');
    this.parentNode.classList.toggle('active');
    console.log("item clicked")
    console.log(this.parentNode.classList);

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
      
      var newdiv=document.createElement("div");
      newdiv.setAttribute("class","item all active");

      var btn=document.createElement("button");
      btn.setAttribute("id","check-btn");
      btn.setAttribute("class","check-btn");

      var image=document.createElement("img");
      image.setAttribute("src","images/icon-check.svg");
      image.setAttribute("id","check-img");
      btn.appendChild(image);

      newdiv.appendChild(btn);

      var p=document.createElement("p");
      p.innerHTML=input.value;
      newdiv.appendChild(p);

      listofitems.appendChild(newdiv);
      input.value="";
      
      var image=document.createElement("img");
      image.setAttribute("src","images/icon-cross.svg");
      image.setAttribute("id","cross-img");
      newdiv.appendChild(image);
      
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
    
    
      filterobjects("all");

      function filterobjects(c)
      { var i;
        var x=document.getElementsByClassName('item');
        if(c === "all") c = "";
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
        console.log("inseide of add");
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





