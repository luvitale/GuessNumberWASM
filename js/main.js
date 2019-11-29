window.onload = load_game;

function load_game() {
	activate_risk_button();
	initialize_result_and_attempts();
	_getRandomNumber();
}

function activate_risk_button() {
	var risk_button = document.getElementById("risk");
	risk_button.addEventListener("click", guess);
}

function guess() {
	answer = document.getElementById("answer");
	if (answer.value < 1 || answer.value > 100) return;
	
	var resp = _riskNumber(answer.value);
	
	if (resp < 0) is_smaller();
	else if (resp > 0) is_larger();
	else win();
}

var result = document.getElementById("result");
var attempts = document.getElementById("attempts");

function initialize_result_and_attempts() {
	result.textContent = "Ingresar un número entero";
	attempts.textContent = "";
	document.getElementById("game-style").href = "css/start.css";
}

function is_smaller() {
	console.log("It's smaller");
	result.textContent = "Probá un número más chico";
	attempts.textContent = "Intentos: " + _getAttempts();
	document.getElementById("game-style").href = "css/smaller.css";
	
}

function is_larger() {
	console.log("It's larger");
	result.textContent = "Probá un número más grande";
	attempts.textContent = "Intentos: " + _getAttempts();
	document.getElementById("game-style").href = "css/larger.css";
}

function win() {
	console.log("You win");
	result.textContent = "Ganaste. ¡Felicitaciones!";
	attempts.textContent = "Intentos: " + _getAttempts();
	document.getElementById("game-style").href = "css/win.css";
	
	change_to_restart_button();
	activate_restart_button();
}

function change_to_restart_button() {
	var game_button = document.getElementById("risk");
	game_button.removeEventListener("click", guess);
	
	game_button.id = "restart";
	game_button.name = "restart";
	
	game_button.textContent = "Reiniciar"
}

function activate_restart_button() {
	var restart_button = document.getElementById("restart");
	restart_button.addEventListener("click", restart);
}

function restart() {
	change_to_risk_button();
	load_game();
}

function change_to_risk_button() {
	var game_button = document.getElementById("restart");
	game_button.removeEventListener("click", restart);
	
	game_button.id = "risk";
	game_button.name = "risk";
	
	game_button.textContent = "Arriesgar"
}