function doClear(x)
{
	$('#radio-btn-set-'+x+' input').removeAttr('checked');                   
	$( "#radio-btn-set-"+x ).buttonset('refresh');
	
}
/*
window.onload=function(){ 
	window.setTimeout(
		function() 
		{ 
			alert();
			//document.getElementById("question_paper").submit(); 
			doSubmitForm();
			alert();
		}, 500000);
};*/
function doSubmitForm()
{
	document.getElementById("question_paper").submit();
}

/*
// Set the date we're counting down to
//var countDownDate = new Date("Oct 17, 2017 20:37:25").getTime();
//var countDownDate = new Date("Oct 27, 2017 12:19:25").getTime();
var countDownDate = new Date().getTime();
countDownDate+=5*60*1000;

// Update the count down every 1 second
var x = setInterval(function() {

  
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = "Time Left<br>"+hours + "h "  + minutes + "m " + seconds + "s";

  // If the count down is finished, write some text 
  if (distance < 0) {
	clearInterval(x);
	document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
*/