function performOperations() {
    const value1Str = document.getElementById("value1").value.toLowerCase();
    const value2Str = document.getElementById("value2").value.toLowerCase();

    // Treat string inputs as booleans for demonstration
    const value1 = value1Str === "true";
    const value2 = value2Str === "true";

    const andResult = value1 && value2;
    const orResult = value1 || value2;
    const notResult1 = !value1;
    const notResult2 = !value2;

    document.getElementById("andResult").textContent = andResult;
    document.getElementById("orResult").textContent = orResult;
    document.getElementById("notResult1").textContent = notResult1;
    document.getElementById("notResult2").textContent = notResult2;
}
