$(document).ready(function(){

  var bgimg1=document.getElementById("bg-img1");
  var firstpara=document.getElementById("firstpara");
  var secondpara=document.getElementById("secondpara");               

  // desktop images array
  var desktop=['url("images/desktop-image-hero-0.jpg")',
  'url("images/desktop-image-hero-1.jpg")',
  'url("images/desktop-image-hero-2.jpg")'] //a=2

  //mobile images array
  var mobile=['url("images/mobile-image-hero-0.jpg")',
  'url("images/mobile-image-hero-1.jpg")',
  'url("images/mobile-image-hero-2.jpg")'] //a=2


// textbox1 para1 array
  var b=['Discover innovative ways to decorate',
  'We are available all across the globe',
  'Manufactured with the best materials']


// textbox1 para2 array
  var c=["We provide unmatched quality,comfort,and style for property owners across the country. our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",

  "We are available all across the globe With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",

  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  ]
  
  var i=0;

// automatic changing of img and text
  // setInterval(changeimage,3000);
  // function changeimage(){
  //   var i=Math.floor((Math.random()*3));
  //   bgimg1.style.backgroundImage=a[i];
  //   firstpara.innerHTML=b[i];
  //   secondpara.innerHTML=c[i];
  //   }

  function leftdesktop(i){
    i--; 
    if (i==-1){
      i=2;
    }
    var img=desktop[i];
    console.log(img);
    bgimg1.style.backgroundImage=img;
    firstpara.innerHTML=b[i];
    secondpara.innerHTML=c[i];
    return i;
    }

    function rightdesktop(i){
      i++;
      if(i==3){
        i=0;
      }
      var img=desktop[i];
      bgimg1.style.backgroundImage=img;
      firstpara.innerHTML=b[i];
      secondpara.innerHTML=c[i];
      return i;
    } 

    function leftmobile(i){  
      i--; 
      if (i==-1){
        i=2;
      }
      var img=mobile[i];
      console.log(img);
      bgimg1.style.backgroundImage=img;
      firstpara.innerHTML=b[i];
      secondpara.innerHTML=c[i];
      return i;
      }
  

    function rightmobile(i){
      i++;   
      if(i==3){
        i=0;
      }  
      var img=mobile[i];
      bgimg1.style.backgroundImage=img;
      firstpara.innerHTML=b[i];
      secondpara.innerHTML=c[i];
      return i;
      } 
  

  $(".leftdesktoparrow").click(function(){
    i=leftdesktop(i);

  });

  $(".rightdesktoparrow").click(function(){
    i=rightdesktop(i);
  });

  $(".leftmobilearrow").click(function(){
    i=leftmobile(i);

  });

  $(".rightmobilearrow").click(function(){
    i=rightmobile(i);
  });


  $("#hamburgericon").click(function(){
    // $("#bg-img1").css("opacity","0.2");
    // $(".lowerbox").css("opacity","0.2");
    // $(".textbox1").css("opacity","0.2");
    $(".navitems").css("left","0");
    // $(".navitems").css("opacity","1");
      
  });
  
  $("#closeicon").click(function(){
    // $("#bg-img1").css("opacity","1");
    $(".navitems").css("left","-100%");
    // $(".textbox1").css("opacity","1");
    // $(".lowerbox").css("opacity","1");
    // $(".navitems").css("opacity","1");       
    // $("body").css("opacity","1");
   });
    

  
});