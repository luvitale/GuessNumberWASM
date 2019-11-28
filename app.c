#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <emscripten/emscripten.h>
#define MENOR -1
#define MAYOR 1
#define IGUAL 0

int random_number;
int attempts = 0;

int main(int argc, char ** argv) {
    printf("WebAssembly module loaded\n");
}

void EMSCRIPTEN_KEEPALIVE getRandomNumber() {
    srand ( time(NULL) );
	attempts = 0;
    random_number = rand() % 100 + 1;
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