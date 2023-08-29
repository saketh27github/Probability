function calculateProfitOrLossPercentage(cp, sp) {
    if (sp > cp) {
        // Profit
        let profit = sp - cp;
        let profitPercentage = (profit / cp) * 100;
        return `The profit gained on the object is ${profitPercentage.toFixed(2)}%`;
    } else if (sp < cp) {
        // Loss
        let loss = cp - sp;
        let lossPercentage = (loss / cp) * 100;
        return `The loss incurred on the object is ${lossPercentage.toFixed(2)}%`;
    } else {
        // No Profit No Loss
        return `There is neither profit nor loss on the object.`;
    }
}

function displayProfitOrLossPercentage() {
    let cp = parseFloat(document.getElementById("cp").value);
    let sp = parseFloat(document.getElementById("sp").value);

    if (isNaN(cp) || isNaN(sp)) {
        alert("Please enter valid values.");
        return;
    }

    let result = calculateProfitOrLossPercentage(cp, sp);
    document.getElementById("result").innerText = result;
}
