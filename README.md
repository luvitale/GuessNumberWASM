# Adivin� el n�mero

## Requisitos

 - Navegador con soporte para WebAssembly.
 - Compilador de C a WebAssembly.
 - Compilador para C.
 - Servidor web local (por ejemplo, python -m http.server 9000)

## Compilar C en WebAssembly

Generar el c�digo de pegamento de Javascript con el compilador de Emscripten.
` emcc app.c -s WASM=1  -O3 -o bin/app.js`

- emcc - El compilador Emscripten.
- app.c - El archivo de entrada que contiene el c�digo C.
- -s WASM=1 - Especifica la relaci�n con WebAssembly.
- -03 - El nivel de optimizaci�n de c�digo deseado.
- -o index.js - Dice a emcc que genere un archivo JS con todo el c�digo de pegamento necesario para el m�dulo wasm.

Despu�s de ejecutar el comando, se a�adir�n dos archivos en la carpeta de binarios del directorio de trabajo: app.wasm e app.js. Uno contiene el m�dulo de WebAssembly, y el otro, el c�digo de pegamento, respectivamente.

## Cargar c�digo en el navegador

En el archivo index.html est� especificado el v�nculo con el script de Javascript creado por el compilador.
```html
<script src="bin/app.js"></script>
```
Con esto se podr�n ejecutar las funciones codificadas en C, utilizando su nombre respectivo comenzando con un gui�n bajo.

Por ejemplo, teniendo la funci�n riskNumber en C:
```c
int EMSCRIPTEN_KEEPALIVE riskNumber(int number) {
	attempts++;
	if (random_number < number) return MENOR;
	else if (random_number > number) return MAYOR;
	else return IGUAL;
}
```
En Javascript la llamar�a as�:
```javascript
var number = 50;
_riskNumber(number);
```
Por problemas de cross-origin, para ejecutar el proyecto ser� necesario un servidor web local. Con Python es posible iniciar uno.

 1. Para consultar la versi�n instalada:
	```bash
	python -V
	```
 2. Posteriormente ejecutar el siguiente comando para crear un servidor local:
	```bash
	# Versi�n 2.x
	python -m SimpleHTTPServer 8080

	# Versi�n 3.x
	python -m http.server 8080
	```

## Iniciar la aplicaci�n en el navegador

Ahora ingresando en ```localhost:9000``` se podr� visualizar la interfaz para ingresar un n�mero del 1 al 100 y adivinar el n�mero que la computadora genera.