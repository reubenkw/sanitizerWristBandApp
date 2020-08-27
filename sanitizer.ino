#include <Wire.h>
#include <Servo.h>
#define SERVO_PIN 13
#define UPWARDS 15000
#define SIDEWAYS_LEFT 3000

int16_t AcX = 0;
const int MPU_addr = 0x68;
Servo myservo;
int pos = 0;

bool up = false;
bool side = false;
int count_cycles = 0;
int count_turns = 0;

void setup() {
  Serial.begin(115200);
  Wire.begin();
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x6B);
  Wire.write(0);
  Wire.endTransmission(true);
  Serial.println("Wrote to IMU");
  Serial.println("Connecting to ");
  myservo.attach(SERVO_PIN);
}

void loop() {
  mpu_read();
  check_flick();
  
  //User must spin wrist within 4 seconds
  count_cycles++;

  //Squeezes bottle with servo
  if (count_turns == 3) {
    squeeze();
    count_turns = 0;
  }
  //Reset counter
  if (count_cycles > 20) {
    reset();
  }
  delay(200);
}

void mpu_read() {
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x3B);  // starting with register 0x3B (ACCEL_XOUT_H)
  Wire.endTransmission(false);
  Wire.requestFrom(MPU_addr, 14, true); // request a total of 14 registers
  AcX = Wire.read() << 8 | Wire.read(); // 0x3B (ACCEL_XOUT_H) & 0x3C (ACCEL_XOUT_L)
  Serial.print("AcX: ");
  Serial.print(AcX);
  Serial.print("\n");
}

void check_flick() {
  //Checks the orientation of the watch
  if (AcX > UPWARDS) {
    up = true;
  }
  if (AcX < SIDEWAYS_LEFT) {
    side = true;
  }

  //Counts a successful flick
  if (up && side) {
    count_turns++;
    up = false;
    side = false;
    Serial.println("Flicked");
  }
}
void squeeze() {
  Serial.println("Squeeze");
  for (pos = 0; pos <= 180; pos += 5) {
    myservo.write(pos);
    delay(5);
  }
  for (pos = 180; pos >= 0; pos -= 5) {
    myservo.write(pos);
    delay(5);
  }
}

void reset() {
  count_cycles = 0;
  count_turns = 0;
  up = false;
  side = false;
  Serial.println("Reset");
}
