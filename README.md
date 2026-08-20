🔥 Gas Leakage Alert System

A JavaScript-based simulation of a Gas Leakage Alert System. The project monitors a simulated gas sensor value and activates an alert when the gas concentration exceeds a predefined safety threshold.

Features
Detects simulated gas leakage.
Compares gas concentration with a safety threshold.
Generates an alert when leakage is detected.
Displays safe status when gas concentration is within the limit.
Includes a JavaScript testbench for testing different gas levels.
Technologies Used
JavaScript
Node.js
Console-based simulation
Project Structure
gas-leakage-alert/
├── README.md
├── gasLeakageAlert.js
├── testbench.js
└── simulation-output.txt

How to Run

Make sure Node.js is installed on your computer.

Run the simulation:

node gasLeakageAlert.js


Run the testbench:

node testbench.js

Working Principle

The system receives a simulated gas sensor value. If the value is greater than or equal to the defined threshold, the system reports a gas leakage and activates the alert. Otherwise, the system displays a safe message.

Example
Gas Level: 25
Status: SAFE

Gas Level: 85
Status: GAS LEAKAGE DETECTED!
ALERT: Please take immediate safety precautions.

Disclaimer

This is an educational software simulation and is not intended to replace certified gas detection or safety equipment.
