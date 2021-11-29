// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	let input = prompt("Please enter length of password:");
	length = parseInt(input); //convert user input string into integer
	console.log(length); // check the converted user input.

	// The following lines checks for length validity.
	if (length == null || length == "") {
		alert("length cannot empty!");
		return;
	} else if (isNaN(length) == true) {
		alert("length must be a number!");
		return;
	} else if (length < 8) {
		alert("length must be at least 8!");
		return;
	} else if (length > 128) {
		alert("length must at most 128!");
		return;
	}

	// The following lines questions/confirms users specification of password.
	if (confirm("Include special characters?")) {
		var spChar = true;
	} else {
		var spChar = false;
	}
	if (confirm("Include numbers?")) {
		var num = true;
	} else {
		var num = false;
	}
	if (confirm("Include uppercase characters?")) {
		var upper = true;
	} else {
		var upper = false;
	}
	if (confirm("Include lowercase characters?")) {
		var lower = true;
	} else {
		var lower = false;
	}

	if (spChar != true && num != true && upper != true && lower != true) {
		alert(
			"Password must have one special character, number, uppercase, or lowercase!"
		);
		return;
	}

	var password = generatePassword(length, spChar, num, upper, lower); // call generatePassword Function to generate the password with specifics.
	var passwordText = document.querySelector("#password");// specify where in the HTML that this is gonna render

	passwordText.value = password;// set the value of the password to the generated password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(length, spChar, num, upper, lower) {
	var x = [];
	x.length = length;
	console.log(x);
	var special = "!#$%&,';()=-+_@~`/?.,><}{][";
	var numbers = "0123456789";
	var lowercase = "qwertyuiopasdfghjklzxcvbnm";
	var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
	var usedChar = "";

	if (spChar == true) {
		usedChar += special;
		console.log(usedChar);
		console.log("spChar is True");
	}
	if (num == true) {
		usedChar += numbers;
		console.log(usedChar);
		console.log("num is True");
	}
	if (upper == true) {
		usedChar += uppercase;
		console.log(usedChar);
		console.log("upper is True");
	}
	if (lower == true) {
		usedChar += lowercase;
		console.log(usedChar);
		console.log("lower is True");
	}

	for (var i = 0; i < x.length; i++) {
		if (spChar == true && i == 1) {
			x[i] = special.charAt(Math.floor(Math.random() * special.length));
		} else if (num == true && i == 2) {
			x[i] = numbers.charAt(Math.floor(Math.random() * numbers.length));
		} else if (lower == true && i == 3) {
			x[i] = lowercase.charAt(Math.floor(Math.random() * lowercase.length));
		} else if (upper == true && i == 4) {
			x[i] = uppercase.charAt(Math.floor(Math.random() * uppercase.length));
		} else {
			x[i] = usedChar.charAt(Math.floor(Math.random() * usedChar.length));
		}
	}

	output = x.join(""); // turns the array to a string without commas
	return output;
}
