// Recursive function to generate all possible outcomes for given number of dice
function generateOutcomes(diceCount, currentOutcome = []) {
    if (diceCount === 0) {
        return [currentOutcome];
    }

    let outcomes = [];
    for (let i = 1; i <= 6; i++) {
        outcomes = outcomes.concat(generateOutcomes(diceCount - 1, [...currentOutcome, i]));
    }

    return outcomes;
}

// Count the outcomes that result in the desired sum
function countDesiredSumOutcomes(outcomes, desiredSum) {
    return outcomes.filter(outcome => outcome.reduce((a, b) => a + b) === desiredSum).length;
}

// Function to compute the Greatest Common Divisor
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// Convert a decimal probability to a simplified fraction
function toFraction(probability, diceCount) {
    const denominator = Math.pow(6, diceCount);
    const numerator = probability * denominator;
    const commonDivisor = gcd(Math.round(numerator), denominator);
    return `${Math.round(numerator) / commonDivisor}/${denominator / commonDivisor}`;
}

// Main function
function probabilityOfSum(diceCount, desiredSum) {
    const outcomes = generateOutcomes(diceCount);
    const favorableOutcomes = countDesiredSumOutcomes(outcomes, desiredSum);
    return favorableOutcomes / outcomes.length;
}

document.getElementById("calculateButton").addEventListener("click", function() {
    const diceCount = parseInt(document.getElementById("diceCount").value, 10);
    const desiredSum = parseInt(document.getElementById("desiredSum").value, 10);

    if (isNaN(diceCount) || isNaN(desiredSum) || diceCount <= 0) {
        document.getElementById("result").textContent = "Invalid input.";
        return;
    }

    const prob = probabilityOfSum(diceCount, desiredSum);
    const fraction = toFraction(prob, diceCount);
    document.getElementById("result").textContent = `The probability of getting a total of ${desiredSum} with ${diceCount} dice is: ${fraction}`;
});






// document.getElementById("calculateButton").addEventListener("click", function() {
//     const diceCount = parseInt(document.getElementById("diceCount").value, 10);
//     const desiredSum = parseInt(document.getElementById("desiredSum").value, 10);

//     if (isNaN(diceCount) || isNaN(desiredSum)) {
//         document.getElementById("result").textContent = "Invalid input.";
//         return;
//     }

//     const probability = probabilityOfSum(diceCount, desiredSum);
//     const fraction = toFraction(probability);
//     document.getElementById("result").textContent = `The probability of getting a total of ${desiredSum} with ${diceCount} dice is: ${fraction}`;
// });

// //... [Rest of your code remains unchanged]
