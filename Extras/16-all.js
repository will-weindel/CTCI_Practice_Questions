const subtract = function(a, b) {

  for (let i = 1; i <= Math.abs(b); i++) {
    a += -1;
  }

  return a;
}

const multiply = function(a, b) {
  let temp = 0;

  for (let i = 1; i <= Math.abs(b); i++) {
    temp += a;
  }

  return temp;
}

const divide = function(a, b) {
  let count = 0;
  let temp = 0;

  while (temp < a) {
    count++;
    temp += b;
  }

  return count;
}

const findYearWithMostPeople = function(array) {
  let currentCount = 0;
  let maxCountAndYear = [0, 0];
  let populationGrowthDecay = {};
  let firstYear = 101;
  let lastYear = -1;

  for (let person of array) {
    let pGD = populationGrowthDecay;

    if (person[0] < firstYear) firstYear = person[0];
    if (person[1] > lastYear) lastYear = person[1];

    if (pGD[person[0]]) pGD[person[0]]++;
    else pGD[person[0]] = 1;

    if (pGD[person[1] + 1]) pGD[person[1] + 1]--;
    else pGD[person[1] + 1] = -1;
  }

  for (let i = firstYear; i <= lastYear; i++) {
    if (populationGrowthDecay[i]) currentCount += populationGrowthDecay[i];
    if (currentCount > maxCountAndYear[0]) maxCountAndYear = [currentCount, i];
  }

  return maxCountAndYear;
}