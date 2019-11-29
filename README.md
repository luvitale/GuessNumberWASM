# Adiviná el número

## Requisitos

 - Navegador con soporte para WebAssembly.
 - Compilador de C a WebAssembly.
 - Compilador para C.
 - Servidor web local (por ejemplo, python -m http.server 9000)

## Compilar C en WebAssembly

Generar el código de pegamento de Javascript con el compilador de Emscripten.
```console
if not exist bin mkdir bin && emcc app.c -s WASM=1 -O3 -o bin/app.js
```

- emcc - El compilador Emscripten.
- app.c - El archivo de entrada que contiene el código C.
- -s WASM=1 - Especifica la relación con WebAssembly.
- -03 - El nivel de optimización de código deseado.
- -o index.js - Dice a emcc que genere un archivo JS con todo el código de pegamento necesario para el módulo wasm.

Después de ejecutar el comando, se añadirán dos archivos en la carpeta de binarios del directorio de trabajo: app.wasm e app.js. Uno contiene el módulo de WebAssembly, y el otro, el código de pegamento, respectivamente.

## Cargar código en el navegador

En el archivo index.html está especificado el vínculo con el script de Javascript creado por el compilador.
```html
<script src="bin/app.js"></script>
```
Con esto se podrán ejecutar las funciones codificadas en C, utilizando su nombre respectivo comenzando con un guión bajo.

Por ejemplo, teniendo la función riskNumber en C:
```c
int EMSCRIPTEN_KEEPALIVE riskNumber(int number) {
	attempts++;
	if (random_number < number) return MENOR;
	else if (random_number > number) return MAYOR;
	else return IGUAL;
}
```
En Javascript la llamaría así:
```javascript
var number = 50;
_riskNumber(number);
```
Por problemas de cross-origin, para ejecutar el proyecto será necesario un servidor web local. Con Python es posible iniciar uno.

 1. Para consultar la versión instalada:
	```console
	python -V
	```
 2. Posteriormente ejecutar el siguiente comando para crear un servidor local:
	```console
	# Versión 2.x
	python -m SimpleHTTPServer 9000

	# Versión 3.x
	python -m http.server 9000
	```

## Iniciar la aplicación en el navegador

Ahora ingresando en ```localhost:9000``` se podrá visualizar la interfaz para ingresar un número del 1 al 100 y adivinar el número que la computadora genera.