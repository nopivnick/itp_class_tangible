/*
  Noah Pivnick
  Tangible Interaction Workshop 2126.001 (Tom Igoe)
  Week 01 - Clock
*/


/*
  Notes:
  Best Performance: both rotary encoder pins should have interrupt capability
  MKRZERO External Interrupts: 8 (0, 1, 4, 5, 6, 7, 8, A1 -or 16-, A2 - or 17)
*/

// Paul Stroffregen's Quadrature Encoder Library for Arduino
#include <Encoder.h>

Encoder rotaryEncoder(0, 1);

// Rotary encoder dial
long rotaryPositionLast  = -999;     // intial rotary position

// Rotary encoder button
const int rotaryButtonPin = 10;      // the number of the pushbutton pin
int rotaryButtonCount = 0;           // variable for rotary button state

// Push button
const int pushButtonPin = 11;
int pushButtonCount = 0;             // variable for push button state

// Time
int hours = 0;
int minutes = 0;
int seconds = 0;

void setup() {
  Serial.begin(9600);

  // Rotary encoder dial setup
  pinMode(rotaryButtonPin, INPUT);

  // Rotary encoder button setup


  // Push button settup
  pinMode(pushButtonPin, INPUT);


}

void loop() {

  // Rotary encoder dial stuff
  long rotaryPositionNew = rotaryEncoder.read();
  rotaryPositionLast = ((rotaryPositionNew / 4) %;

  // Rotary encoder button stuff

  // Push button stuff

  // Hardware satus serial port
  Serial.print("Rotary position = ");
  Serial.print(rotaryPositionNew);
  Serial.print(" | ");
  Serial.print("Rotary button count = ");
  Serial.print(rotaryButtonCount);
  Serial.print(" | ");
  Serial.print("Push button count = ");
  Serial.print(pushButtonCount);
  Serial.println();

}
