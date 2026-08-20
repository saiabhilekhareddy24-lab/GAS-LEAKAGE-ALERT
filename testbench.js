// Testbench for Gas Leakage Alert System

const GAS_THRESHOLD = 70;

function checkGasLevel(gasLevel) {
    return gasLevel >= GAS_THRESHOLD ? "LEAKAGE" : "SAFE";
}

function runTest(testName, gasLevel, expected) {
    const result = checkGasLevel(gasLevel);
    const status = result === expected ? "PASS" : "FAIL";

    console.log(
        `${testName} | Gas Level: ${gasLevel} | Expected: ${expected} | Result: ${result} | ${status}`
    );
}

console.log("=== GAS LEAKAGE ALERT TESTBENCH ===");

runTest("Test 1", 20, "SAFE");
runTest("Test 2", 50, "SAFE");
runTest("Test 3", 69, "SAFE");
runTest("Test 4", 70, "LEAKAGE");
runTest("Test 5", 80, "LEAKAGE");
runTest("Test 6", 100, "LEAKAGE");
