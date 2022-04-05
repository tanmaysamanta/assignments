const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (!areEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
};

const areEqual = function (element1, element2) {
  if (Array.isArray(element1) && Array.isArray(element2)) {
    return areArraysEqual(element1, element2)
  }
  return element1 === element2;
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
  console.log(groupBy([]));
  console.log(groupBy([1]));
  console.log(groupBy([1, 2]));
  console.log(groupBy([1, 2, 1]));
  console.log(groupBy([1, 2, 3, 1, 2, 4]));
  console.log(groupBy([[1, 1], 1, [1, 1], 1]));
  console.log(groupBy([[1, 1], 1, [1, 1], 1, 2, [2, 2]]));
  console.log(groupBy([[[1, 2], [2, 3]], 5, [[1, 2], [2, 3]]]));
};

main();
