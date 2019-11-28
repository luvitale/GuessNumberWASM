window.onload = get_random_number;

risk = document.getElementById("risk");
risk.addEventListener("click", guess);

var result = document.getElementById("result");

var attempts = document.getElementById("attempts");

function get_random_number() {
	_getRandomNumber();
	console.log("Random number loaded");
}

function guess() {
	answer = document.getElementById("answer");
	if (answer.value < 1 || answer.value > 100) return;
	
	var resp = _riskNumber(answer.value);
	
	console.log(resp);
	
	if (resp < 0) is_smaller();
	else if (resp > 0) is_larger();
	else win();
}

function is_smaller() {
	result.textContent = "Probá un número más chico";
	attempts.textContent = "Intentos: " + _getAttempts();
}

function is_larger() {
	result.textContent = "Probá un número más grande";
	attempts.textContent = "Intentos: " + _getAttempts();
}

function win() {
	result.textContent = "Ganaste. ¡Felicitaciones!";
	attempts.textContent = "Intentos: " + _getAttempts();
}