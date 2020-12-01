var finalDate= new Date("Dec 25, 2020 06:00:00").getTime();
// alert(finalDate);

//update countdown everty 1 sec
var interval = setInterval(function(){
    var now = new Date().getTime();
  

// remaining from NOW to final date 
var remaining = finalDate - now;
// alert(remaining);

// left days 
var days = Math.floor(remaining / (1000 * 60 * 60 * 24));
// left hours 
var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// left minutes
var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
// left sec 
var seconds = Math.floor((remaining % (1000 * 60)) / 1000);

//show final in html
// document.getElementById('until').innerHTML= days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds ";
// days 
document.getElementById('days').innerHTML= days + " days, ";

// hours
document.getElementById('hours').innerHTML= hours + " hours, ";

// minutes
document.getElementById('minutes').innerHTML= minutes + " minutes, ";

// seconds 
document.getElementById('seconds').innerHTML= seconds + " seconds ";


})