const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  sortElves(data);
})

const sortElves = (data) => {
  let elves = data.trim().split('\n\n');
  const sortedElves = [];
  elves.forEach(elf => {
    const elfData = {total: 0};
    elfData.calories = elf.split('\n').map(calorie => parseInt(calorie, 10));
    elfData.calories.forEach(calorie => elfData.total += calorie);
    sortedElves.push(elfData)
  });
  getElfWithMostCalories(sortedElves);
  getTop3Elves(sortedElves);
}

// Answer 1
const getElfWithMostCalories = (elves) => {
  const totals = elves.map(elf => elf.total);
  console.log('Answer 1: ', Math.max(...totals));
}

// Answer 2
const getTop3Elves = (elves) => {
  const totals = elves.map(elf => elf.total);
  const orderedCalories = totals.sort((a, b) => b - a);
  const top3 = orderedCalories.slice(0, 3);

  const answer2 = top3.reduce((a, b) => a + b, 0);
  console.log('Answer 2:', answer2);
}