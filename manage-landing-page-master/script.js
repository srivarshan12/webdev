function myFunction(x) {
  var hamburger=document.getElementById("hamburger");
  var close=document.getElementById("close");
  var navbar=document.getElementById("navbar");

  if (x.matches) { // If media query matches
    // document.body.style.backgroundColor = "yellow";
    hamburger.style.display="block";
    close.style.display="none";
    navbar.style.display="none";
    $('.testimonials-carousel').slick({
      slidesToShow: 3,
      centerMode: true,
      variableWidth:true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,  
      dots:true
    });
   


  } else {
  //  document.body.style.backgroundColor = "pink";
    hamburger.style.display="none";
    close.style.display="none";
    navbar.style.display="flex";
    $('.testimonials-carousel').slick({
      slidesToShow: 3,
      centerMode: true,
      variableWidth:true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      dots:false
    });
   
  }
}

var x = window.matchMedia("(max-width: 425px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


$(document).ready(function(){
  // Slick version 1.5.8
     });
  






  function checkemail(){
        var email=document.getElementById("checkemail");
        var email_errormsg=document.getElementById("email-errormsg");
        var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(!filter.test(email.value)){
            email_errormsg.style.display="block";

            email.value='';
        }
        else{
            email_errormsg.style.display="none";
            email.value="";
        }
  }




  function opennavbar(){
    var hamburger=document.getElementById("hamburger");
    var close=document.getElementById("close");
    var navbar=document.getElementById("navbar");

    navbar.style.display="flex";
    hamburger.style.display="none";
    close.style.display="block";

  }


  function closenavbar(){
    console.log("close clicked");
    var hamburger=document.getElementById("hamburger");
    var close=document.getElementById("close");
    var navbar=document.getElementById("navbar");
    
    navbar.style.display="none";
    close.style.display="none";
    hamburger.style.display="block";
  }