window.onload = get_random_number;

risk = document.getElementById("risk");
risk.addEventListener("click", guess);


function get_random_number() {
	_getRandomNumber();
	console.log("Random number loaded");
}

function guess() {
	answer = document.getElementById("answer");
	if (answer.value < 1 || answer.value > 100) return;
	
	var result = document.getElementById("result");
	result.textContent = "Número ingresado: " + answer.value;
	
	var attempts = document.getElementById("attempts");
	attempts.textContent = "Intentos: " + _getAttempts();
}