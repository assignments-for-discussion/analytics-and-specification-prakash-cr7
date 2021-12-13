const { expect } = require('chai');
const {
    average,
    doesNaNSequenceExceeds,
    doesNaNPercentExceeds
} = require('../average');

it('computes average of a list of numbers', () => {
    // floating point numbers cannot be compared for equality,
    // hence allowing a delta tolerance
    expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN on an empty list', () => {
    expect(average([])).to.be.NaN;
});

it('ignores NaN in the input', () => {
    expect(average([1, NaN, 2, 3, 4, 5])).to.be.approximately(3, 0.01);
});

// If input is an array of only NaN, the average is NaN
it('reports the average as NaN on a list of NaN', () => {
    expect(average([NaN, NaN])).to.be.NaN;
})

it('returns true if no of NaN in sequence exceeds the limit', () => {
    expect(doesNaNSequenceExceeds([3, 4, NaN, NaN, NaN, NaN, 5, 7])).to.be.true
})

it('returns true if fraction of NaN in sequence exceeds the limit', () => {
    expect(doesNaNPercentExceeds([9, 6, 5, NaN, 2, 5, 4, NaN, 5])).to.be.true
})

it('reports the average as NaN if NaN sequence in input exceeds limits',
    () => {
        expect(average([1, NaN, NaN, NaN, NaN, 3, 5, 6, 6, 5, 4, 4,
            2, 5, 6, 1, 5, 4, 2
        ])).to.be.NaN;
    })

it('reports the average as NaN if percentage of NaN values in input \n\
    exceeds limits',
    () => {
        expect(average([1, 3, 5, NaN, 2, 5, 4, NaN, 5])).to.be.NaN
    })