function enableMenu(x)
{
	$("#menu-"+x).addClass("active");
}

//email validation....
function validationemail()
{
	email=document.getElementById("email").value.toString();
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{	
			var str=xmlhttp.responseText;
			str=str.trim();
			
			if(!(str.localeCompare("EAR")))
			{
				alert("Email id is already registered !");
				document.getElementById("email").value="";
				return;
			}
		}
	  }
	xmlhttp.open("GET","chk-email.php?email="+email,true);
	xmlhttp.send();
}
//validation for the contact details.....
function validationph()
{
	ph=document.getElementById("ph").value.toString();
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{	
			var str=xmlhttp.responseText;
			str=str.trim();
			
			if(!(str.localeCompare("CAR")))
			{
				alert("Contact Details is already registered !");
				document.getElementById("ph").value="";
				return;
			}
		}
	  }
	xmlhttp.open("GET","chk-contact.php?ph="+ph,true);
	xmlhttp.send();
}
function doSignUp()
{	
	firstname=document.getElementById("fname").value.toString();
	lastname=document.getElementById("lname").value.toString();
	email=document.getElementById("email").value.toString();
	ph=document.getElementById("ph").value.toString();
	townVill=document.getElementById("signTownVill").value.toString();
	district=document.getElementById("signDistrict").value.toString();
	//state=document.getElementById("signState").value.toString();
	pass=document.getElementById("pass").value.toString();
	repass=document.getElementById("repass").value.toString();
	ref=document.getElementById("referred-by").value.toString();
	
	if(firstname=="")
	{
		alert("Please provide your First name !!");
		return;
	}
	if(lastname=="")
	{
		alert("Please provide your Last name !!");
		return;
	}
	/*if(email=="" && ph=="")
	{
		alert("Please provide Minimum One Contact !!");
		return;
	}*/
	if(ph=="")
	{
		alert("Please provide Your Contact Number !!");
		return;
	}
	/*if(townVill=="")
	{
		alert("Please provide your Town/Village !!");
		return;
	}*/
	if(district=="")
	{
		alert("Please provide your Country !!");
		return;
	}
	/*if(state=="")
	{
		alert("Please provide your State !!");
		return;
	}*/
	if(pass=="")
	{
		alert("Please provide a password !!");
		return;
	}
	if(pass.length<8)
	{
		alert("Password length should be more than 8 characters !!");
		return;
	}
	
	if(repass=="")
	{
		alert("Please retype your password !!");
		return;
	}
	
	if(pass!=repass)
	{
		alert("Re-typed password does not matched with the password !");
		return;
	}
	
	if(document.getElementById("trms").checked)
	{
		;
	}
	else
	{
		alert("Please accept terms & conditions");
		return;
	}
	
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{	
			//alert(xmlhttp.responseText);
			var str=xmlhttp.responseText;
			str=str.trim();
			
			if(!(str.localeCompare("EAR")))
			{
				alert("Email id is already registered !");
				return;
			}
			else if(!(str.localeCompare("CAR")))
			{
				alert("Contact is already registered !");
				return;
			}
			else if(!(str.localeCompare("user")))
			{
				alert("Thank you for registering with us !!");
				location.href="./index.php";
			}
			else
			{
				alert("Oops!! Something went wrong, please try again !");
				return;
			}
		}
	  }
	  //alert("save-new-retailer.php?distri="+distri+"&name="+name+"&email="+email+"&ph="+ph+"&dob="+dob+"&add1="+add1+"&add2="+add2+"&city="+city+"&state="+state+"&pin="+pin);
	xmlhttp.open("GET","save-new-user.php?fname="+firstname+"&lname="+lastname+"&email="+email+"&ph="+ph+"&town_vill="+townVill+"&district="+district+"&pass="+pass+"&ref="+ref,true);
	xmlhttp.send();
	
}

function doLogin()
{
	user=document.getElementById("user").value.toString();	
	pass=document.getElementById("lpass").value.toString();

	if(user=="")
	{
		alert("Please provide your email id !!");
		return;				
	}
	if(pass=="")
	{
		alert("Please provide your password !!");
		return;				
	}
	
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//alert(xmlhttp.responseText);
			var str=xmlhttp.responseText;
			str=str.trim();
			var str1=str.split("|");
			
			if(!(str1[0].localeCompare("1")))
			{
				location.href="./index.php";
				
			}
			else if(!(str.localeCompare("10")))
			{
				alert("Sorry!!! You are Inactive By Admin...");
				location.href="index.php";
			}
			else
			{
				alert("Login credential(s) mismatched !!");
				return;
			}
			
		}
	  }
	xmlhttp.open("GET","./validation.php?user="+user+"&pass="+pass,true);
	xmlhttp.send();
}


window.onresize = function(event) {
	resizeDiv();
}
function resizeDiv()
{
	var height = $('.home-about').height();
	var width = $('.home-about').width();
	if(width>980)
	{
		height=(height/2)-60;
		$(".home-about-heading").css("padding-top",height+"px");
	}
	
	
}