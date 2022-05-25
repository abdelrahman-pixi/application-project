
//________________________________________________________________________   
window.onload=pageLoad;
function pageLoad(){
	var Form = document.getElementById("Form");
	Form.onsubmit= registration;
}

function registration()
{
	var mail = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var telephone = document.getElementById("phone").value;
	var firstname = document.getElementById("first").value;
	var lastname = document.getElementById("second").value;
	var address = document.getElementById("address").value;
	var Bool = true;

	var pwd_check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/;
	var name_check = /^[A-Za-z ]+$/;
	var mail_check = /^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
	var phone_check = /^[0-9]{11}$/;

	if(firstname == "") {
		alert("First-Name is required !");
		Bool= false;
	}

	if(lastname == "") {
		alert("Last-Name is required !");
		Bool= false;
	}

	if(mail == "") {
		alert("E-mail is required !");
		Bool= false;
	}

	if(password == "") {
		alert("Password is required !");
		Bool= false;
	}
	
	if (telephone == "") {
		alert("Phone is required !");
		Bool=false;
	}
	if (address == "") {
		alert("address is required !");
		Bool=false;
	}

	 if(!name_check.test(firstname)){
		alert("only letters or space allowed in first-name field");
		Bool=false ;
	}
	if(!name_check.test(lastname)){
		alert("only letters or space allowed in second-name field");
		Bool=false ;
	}

	 if(!mail_check.test(mail)){
		alert("Email Not Valid");
		Bool=false;
		}

	if(!pwd_check.test(password) || document.getElementById("password").value.length < 8){
		alert("Not Valid password, It must contain 8 characters: starts with uppercase, contains lowercase, one number and one special character at least");
		Bool=false;
	}
		
	if(!phone_check.test(telephone)){
		alert("Phone number not valid");
		Bool=false;
	}

	if(Bool==true){
		alert('Thank for Registration');
		window.location = "index.html"; 
		}
	
	return Bool;
}





