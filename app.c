#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <emscripten/emscripten.h>
#define MENOR -1
#define MAYOR 1
#define IGUAL 0
#define MAXIMO 100
#define MINIMO 1

int random_number;
int attempts;

int main(int argc, char ** argv) {
    printf("WebAssembly module loaded\n");
}

void EMSCRIPTEN_KEEPALIVE getRandomNumber() {
	attempts = 0;
    srand ( time(NULL) );
    random_number = rand() % (MAXIMO - MINIMO + 1) + MINIMO;
	printf("Random number loaded\n");
}

int EMSCRIPTEN_KEEPALIVE getAttempts() {
	return attempts;
}

int EMSCRIPTEN_KEEPALIVE riskNumber(int number) {
	attempts++;
	if (random_number < number) return MENOR;
	else if (random_number > number) return MAYOR;
	else return IGUAL;
}