#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <emscripten/emscripten.h>

int random_number;
int attempts = 0;

int main(int argc, char ** argv) {
    printf("WebAssembly module loaded\n");
}

void EMSCRIPTEN_KEEPALIVE getRandomNumber() {
    srand ( time(NULL) );
    random_number = rand() % 100 + 1;
}

int EMSCRIPTEN_KEEPALIVE getAttempts() {
	return attempts;
}