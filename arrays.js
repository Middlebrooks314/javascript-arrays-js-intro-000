var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element) {
  var newArray = [element, ...array]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray (array, element) {
  var newEndArray = [...array,element];
  return newEndArray;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array; 
}

function accessElementInArray (array, index) {
  console.log(array[index]);
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function 