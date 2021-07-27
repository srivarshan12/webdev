

$(document).ready(function(){
  // Slick version 1.5.8
    $('.testimonials-carousel').slick({
    slidesToShow: 3,
    centerMode: true,
    variableWidth:true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false
  });
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