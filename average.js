
function average(numbers) {
  let sum = 0
  let count = 0
  numbers.forEach(element => {
    if(!isNaN(element)) {
      sum+=element
      count++
    }
  });
  return sum/count
}

module.exports = {average};
