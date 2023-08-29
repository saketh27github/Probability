function calculateSP(cp, gainPercentage) {
    let gain = cp * (gainPercentage / 100);
    let sp = cp + gain;
    return sp;
}

function computeSP() {
    let cp = parseFloat(document.getElementById("cp").value);
    let gainPercentage = parseFloat(document.getElementById("gainPercentage").value);

    if (isNaN(cp) || isNaN(gainPercentage)) {
        alert("Please enter valid values.");
        return;
    }

    let sp = calculateSP(cp, gainPercentage);
    document.getElementById("result").innerText = `The selling price (S.P.) is Rs ${sp.toFixed(2)}`;
}
