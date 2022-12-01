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
}

// Answer 1
const getElfWithMostCalories = (elves) => {
  const totals = elves.map(elf => elf.total);
  console.log('Answer 1: ', Math.max(...totals));
}