var d=document.getElementById("days");
var h=document.getElementById("hours");
var m=document.getElementById("minutes");
var s=document.getElementById("seconds");

var d1=document.getElementById("days1");
var h1=document.getElementById("hours1");
var m1=document.getElementById("minutes1");
var s1=document.getElementById("seconds1");

let countDownDate=new Date();
// var sd=window.prompt("Enter Date");
// var sh=window.prompt("Enter Hours (1-24)");
// var sm=window.prompt("Enter Minutes");
// var ss=window.prompt("Enter Seconds");
// var time=document.getElementById("time");

countDownDate.setDate(25);
countDownDate.setHours(21);
countDownDate.setMinutes(22);
countDownDate.setSeconds(00);


let x=setInterval(function(){
    let now=new Date().getTime();
    // now.setDate(8);
    // now.setHours(23);
    // now.setMinutes(55);
    // now.setSeconds(41);
        
    // b.innerHTML=new Date();
    let timeLeft=countDownDate-now;
    if(timeLeft>=0){
        const days  = Math.floor(timeLeft/(1000*60*60*24));
        const hours = Math.floor((timeLeft/(1000*60*60))%24);
        const minutes=Math.floor((timeLeft/1000/60)%60);
        const seconds=Math.floor((timeLeft/1000)%60);
        
        // clearing countdown when complete

        d.innerHTML=days;
        d1.innerHTML=days;
        
        h.innerHTML=hours;
        h1.innerHTML=hours;
        
        m.innerHTML=minutes;
        m1.innerHTML=minutes;
        
        s.innerHTML=seconds;
        s1.innerHTML=seconds;
        
        
        console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    }
    else{
        clearInterval(x);
        console.log("boom!");
        // time.style.display="none";        
    }

},1000);

