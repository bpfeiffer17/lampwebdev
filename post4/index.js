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


