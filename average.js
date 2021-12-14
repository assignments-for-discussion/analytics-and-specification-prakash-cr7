function average(numbers) {
    if (doesNaNSequenceExceeds(numbers) || doesNaNPercentExceeds(numbers)) {
        return NaN
    }
    let sum = 0
    let count = 0
    numbers.forEach(element => {
        if (!isNaN(element)) {
            sum += element
            count++
        }
    });
    return sum / count
}

// Max number of NaN data that can appear in the input array sequently
const maxAllowedNaNSeq = 3

// Max fraction of NaN data that can appear in the input array
const maxAllowedNaNPercent = 0.2

function doesNaNSequenceExceeds(numbers) {
    let count = 1
    let max = 1
    for (let i = 1; i < numbers.length; i++) {
        if (isNaN(numbers[i] && isNaN(numbers[i - 1]))) {
            count++
        } else {
            max = Math.max(count, max)
            count = 0
        }
    }
    return max > maxAllowedNaNSeq
}

function doesNaNPercentExceeds(numbers) {
    let count = 0
    numbers.forEach(element => {
        if (isNaN(element)) {
            count++
        }
    });
    return count / numbers.length > maxAllowedNaNPercent
}

module.exports = { average, doesNaNSequenceExceeds, doesNaNPercentExceeds };