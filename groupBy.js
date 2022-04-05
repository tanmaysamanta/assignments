const areArraysEqual = function (firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let index = 0; index < firstArray.length; index++) {
    if (firstArray[index] !== secondArray[index]) {
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

const logToGroup = function (groups, groupIndex, element) {
  if (groupIndex === -1) {
    groups.push([element]);
  } else {
    groups[groupIndex].push(element);
  }
  return groups;
};

const indexOfGroup = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    if (areEqual(groups[index][0], element)) {
      return index;
    }
  }
  return -1;
};

const groupBy = function (sets) {
  let groups = [];
  for (let index = 0; index < sets.length; index++) {
    const groupIndex = indexOfGroup(sets[index], groups);
    groups = logToGroup(groups, groupIndex, sets[index]);
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
};

main();
