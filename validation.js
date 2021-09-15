
function validate(id,pass){
	var aid=id;
	var apass=pass;
	alert("okay");
	if(aid==""){
		document.getElementById("msg").innerHTML="<font color='red'>Enter id</font>";
	}
	else if(apass==""){
		document.getElementById("msg").innerHTML="<font color='red'>Enter password</font>";
	}
	else if(aid=="admin" && apass=="admin"){
		open("ex.html");
	}
	else{
	document.getElementById("msg").innerHTML="<font color='red'>incorrect userid/password</font>";
}
		
		
}
	