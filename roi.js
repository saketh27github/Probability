function calculateAnnualizedROI(initialInvestment, amountEarned, years) {
    let totalROI = (amountEarned - initialInvestment) / initialInvestment;
    let annualizedROI = Math.pow(1 + totalROI, 1/years) - 1;
    return annualizedROI * 100;  // Convert to percentage
}

function computeAnnualizedROI() {
    let initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
    let amountEarned = parseFloat(document.getElementById("amountEarned").value);
    let years = parseFloat(document.getElementById("years").value);

    if (isNaN(initialInvestment) || isNaN(amountEarned) || isNaN(years)) {
        alert("Please enter valid values.");
        return;
    }

    let annualizedROI = calculateAnnualizedROI(initialInvestment, amountEarned, years);
    let resultMessage = `The annualized ROI over ${years} year(s) is ${annualizedROI.toFixed(2)}% `;
    resultMessage += annualizedROI >= 0 ? "(positive)" : "(negative)";

    document.getElementById("result").innerText = resultMessage;
}
