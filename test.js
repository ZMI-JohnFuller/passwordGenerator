//Grab elements, declare variables, call function, output results
function generatePassword(){
	var x = document.getElementById("passOutput");
	var p = document.getElementById("testP");
	x.value = generate();
	p.innerHTML = x.value;
}

function generate(){
	var chars = "abcdefghijklmnopqrstuvwxyz";
	var numbers = "0123456789";
	var symbols = "!@#$%^&*()_+~`|}{[]\:;?,./-='"
	var maxChars = 15;
	var generatedPass = "";
	var holdPass = "";
	for(var i = 0;i < maxChars;i++){
		var passSet1 = chars.charAt(Math.random() * chars.length);
		var passSet2 = numbers.charAt(Math.random() * numbers.length);
		var passSet3 = symbols.charAt(Math.random() * symbols.length);
		var r = Math.floor((Math.random() * 3) + 1)
		generatedPass += passSet1;
		generatedPass += passSet2;
		generatedPass += passSet3;

	}
	return generatedPass;
}