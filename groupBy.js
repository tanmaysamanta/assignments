const areArraysEqual = function (firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let index = 0; index < firstArray.length; index++) {
    if (!areEqual(firstArray[index], secondArray[index])) {
      return false;
    }
  }
  return true;
};

const areEqual = function (firstElement, secondElement) {
  if (Array.isArray(firstElement) && Array.isArray(secondElement)) {
    return areArraysEqual(firstElement, secondElement)
  }
  return firstElement === secondElement;
};

const groupByElements = function (element, groups) {
  for (let position = 0; position < groups.length; position++) {
    if (areEqual(element, groups[position][0])) {
      groups[position].push(element);
      return groups;
    }
  }
  groups.push([element]);
  return groups;
};

const groupBy = function (sets) {
  let groups = [];
  for (let index = 0; index < sets.length; index++) {
    groupByElements(sets[index], groups);
  }
  return groups;
};

const main = function () {
  console.log(groupBy([1]));
  console.log(groupBy([1, 2]));
  console.log(groupBy([1, 2, 1]));
  console.log(groupBy([1, 2, 3, 1, 2, 4]));
  console.log(groupBy([[1, 1], 1, [1, 1], 1]));
  console.log(groupBy([[1, 1], 1, [1, 1], 1, 2, [2, 2]]));
  console.log(groupBy([[[1, 2], [2, 3]], 5, [[1, 2], [2, 3]]]));
};

main();
