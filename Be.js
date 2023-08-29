function calculateBreakEvenPoint() {
    let fixedCosts = parseFloat(document.getElementById("fixedCosts").value);
    let sellingPricePerUnit = parseFloat(document.getElementById("sellingPricePerUnit").value);
    let variableCostPerUnit = parseFloat(document.getElementById("variableCostPerUnit").value);

    if (isNaN(fixedCosts) || isNaN(sellingPricePerUnit) || isNaN(variableCostPerUnit)) {
        alert("Please enter valid values.");
        return;
    }

    let breakEvenPoint = fixedCosts / (sellingPricePerUnit - variableCostPerUnit);
    document.getElementById("result").innerText = `You need to sell ${Math.ceil(breakEvenPoint)} units to break even.`;
}
