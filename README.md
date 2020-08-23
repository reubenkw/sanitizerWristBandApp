# Hygieia
Hygieia is a hand sanitizing wrist band. This device provides hand sanitizer easily with a flick of the wrist and keeps track of how many times you sanitize your hands with our app.

# What made you want to build this hack?
Over the past few months, the world has shifted to combat COVID-19. Individuals across the globe have come together by staying apart. 
When exposure is necessary and as we reopen society, hand washing remains one of the best ways to avoid getting sick. We built the hygieia hand sanitizing wristband to
incentivize hand cleanliness. People are returning to their normal lives but we’ve created this hack to prevent a resurgence in the number of COVID-19 cases.

# What was the most challenging part of the hack?
The most challenging part of this hack was integrating each part of the device together, including the software, firmware, hardware, and mechanical aspects of the device. 
We needed to constantly communicate with each other to ensure that our work would easily fit together in the end and that we would not create parts that conflicted with 
each other. On the mechanical side, we created a CAD model of our casing. On the hardware side, we wired and programmed an ESP32 to detect readings from an accelerometer
and interfaced with a servo motor to squeeze out the hand sanitizer. On the software side, we communicated with the ESP32 through bluetooth and made an app to keep tracking
of metrics from the device.

# What is your tech stack? 
## Mechanical
* Solidworks
* 3D Printer
## Hardware
* Arduino IDE
* ESP32
* MPU 6050 Accelerometer/Gyroscope/Temperature Sensor
* Servo Motor
## Software
* React Native
* Javascript
