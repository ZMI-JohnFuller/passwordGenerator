//Grab elements, declare variables, call function, output results
function generatePassword(){
	var x = document.getElementById("passOutput");
	var p = document.getElementById("testP");
	x.value = generate();
	checkMaxChars();
	p.innerHTML = x.value;
}

//Generate a normal password
function generate(){
	//get variables and elements
	var nL = document.getElementById("noLetters");
	var nN = document.getElementById("noNumbers");
	var nS = document.getElementById("noSymbols");
	var chars = "abcdefghijklmnopqrstuvwxyz";
	var numbers = "0123456789";
	var symbols = "!@#$%^&*()_+~`|}{[]\:;?,./-='"
	var maxChars = document.getElementById("maxCharControl").value;
	var generatedPass = "";
	var holdPass = "";
	//Main loop
	for(var i = 0;i < maxChars;i++){
		//Pick random value for each passSet
		var passSet1 = chars.charAt(Math.random() * chars.length);
		var passSet2 = numbers.charAt(Math.random() * numbers.length);
		var passSet3 = symbols.charAt(Math.random() * symbols.length);
		//if a checkbox is selected, clear out that value
		if(nL.checked == true){passSet1 = "";}
		if(nN.checked == true){passSet2 = "";}
		if(nS.checked == true){passSet3 = "";}
		//Randomly select a set to be added to holdPass
		var r = Math.floor((Math.random() * 3) + 1)
		if(r == 1){holdPass += passSet1;}
		if(r == 2){holdPass += passSet2;}
		if(r == 3){holdPass += passSet3;}
		//if the length of holdPass isn't equal to maxChars, iterate until it is
		if(holdPass.length < maxChars){
			if(i <= maxChars.value + 1){i--}
			console.log("Password:" + holdPass + "::::" +holdPass.length);
		}
	}
	//pass the value to generatedPass to be returned and displayed
	generatedPass = holdPass;
	//logging
	console.log("Max Characters:" + maxChars);
	console.log("passSet1:" + passSet1);
	console.log("passSet2:" + passSet2);
	console.log("passSet3:" + passSet3);
	console.log("Iteration:" + i);
	console.log("Random Position:" + r);
	console.log("Password:" + holdPass + "::::" +holdPass.length);
	//return password
	return generatedPass;
}

function checkBoxes(){
	var nL = document.getElementById("noLetters");
	var nN = document.getElementById("noNumbers");
	var nS = document.getElementById("noSymbols");
	var nA = document.getElementById("noticeArea");
	var nT = document.getElementById("noticeAreaText");
	if(nL.checked == true && nN.checked == true && nS.checked == true){
		nL.checked = false;
		nN.checked = false;
		nS.checked = false;
		nA.style.display = 'block';
		nT.innerHTML = "You cannot select all checkboxes at once.";
		window.setTimeout(hideNotice,5000);
	}
	else{
		nA.style.display = 'none';
		nT.innerHTML = "";
	}
}

function checkMaxChars(){
	var maxChars = document.getElementById("maxCharControl").value;
	var nA = document.getElementById("noticeArea");
	var nT = document.getElementById("noticeAreaText");
	var x = document.getElementById("passOutput");
	console.log(maxChars);
	if (maxChars < 8){
	nA.style.display = 'block';
	nT.innerHTML = "You cannot generate a password less than 8 characters in length for security reasons.";
	window.setTimeout(hideNotice,7000);
	}
}

function hideNotice(){
	var nA = document.getElementById("noticeArea");
	var nT = document.getElementById("noticeAreaText");
	nA.style.display = 'none';
	nT.innerHTML = "";
}