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
    let max = 0
    let count = 0
    numbers.forEach(element => {
        if(isNaN(element)) {
            count++
            max = Math.max(count,max)
        } else count = 0
    })
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