function clearAllInputBoxes() {
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("street").value = "";
	document.getElementById("city").value = "";
	document.getElementById("state").value = "";
	document.getElementById("zip").value = "";
}

function fillState(city) {
	if (city == "Cleveland" || city == "cleveland"){
		document.getElementById("state").value = "Ohio";
	}
	else if (city == "Chicago" || city == "chicago"){
		document.getElementById("state").value = "Illinois"
	}
}

function insertRecord() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var street = document.getElementById("street").value;
	var city = document.getElementById("city").value;
	var state = document.getElementById("state").value;
	var zip = document.getElementById("zip").value;
	var sqlStatement = "INSERT INTO users (first_name, last_name, street, city, state, zip)" +
	"VALUES ('" +firstName+"','"+lastName+"','"+street+"','"+city+"','"+state+"','"+zip+"');"; 
	if (window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			document.getElementById("ajaxResponse").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", "insertRecord.php?sqlStatement="+sqlStatement, true);
	xmlhttp.send();	
}

function getUsers() {
        
        var sqlStatement = "SELECT * FROM users;" 
        
        if (window.XMLHttpRequest){
                xmlhttp = new XMLHttpRequest();
        }else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                        document.getElementById("ajaxResponse").innerHTML = xmlhttp.responseText;
                }
        }
        xmlhttp.open("GET", "getUsers.php?sqlStatement="+sqlStatement, true);
        xmlhttp.send();
}
	


