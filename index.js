// count down date
var countDowndate = new Date("Dec 20, 2022 12:00:00").getTime();
//setting Interval
var x = setInterval( function(){
// today's time
var timeToday = new Date().getTime();
 // tme length
 var length = countDowndate - timeToday;
 //calculating time
   var days = Math.floor(length / (1000 * 60 * 60 * 24));
  var hours = Math.floor((length % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((length % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((length % (1000 * 60)) / 1000);
// Display the result in the element with id="demo"
  document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);