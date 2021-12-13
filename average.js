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
    let flag = false
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            flag = true
            for (let j = i + 1; j <= i + maxAllowedNaNSeq; j++) {
                flag = flag && isNaN(numbers[j])
            }
        }
        if (flag) return true
    }
    return false
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