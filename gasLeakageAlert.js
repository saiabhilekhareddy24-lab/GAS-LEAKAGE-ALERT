// Gas Leakage Alert System
// Educational JavaScript simulation

const GAS_THRESHOLD = 70;

function checkGasLevel(gasLevel) {
    console.log(`Gas Level: ${gasLevel}`);

    if (gasLevel >= GAS_THRESHOLD) {
        console.log("Status: GAS LEAKAGE DETECTED!");
        console.log("ALERT: Please take immediate safety precautions.");
        return "LEAKAGE";
    } else {
        console.log("Status: SAFE");
        return "SAFE";
    }
}

// Example simulation
const gasLevels = [20, 35, 50, 65, 75, 90];

console.log("=== GAS LEAKAGE ALERT SIMULATION ===");

gasLevels.forEach((level) => {
    checkGasLevel(level);
    console.log("----------------------------");
});
