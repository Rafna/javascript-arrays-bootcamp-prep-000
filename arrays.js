var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var newChocolateBars = [1]

function addElementToBeginningOfArray(){
  newChocolateBars.unshift("foo")
  return newChocolateBars
}

function destructivelyAddElementToBeginningOfArray(){
  newChocolateBars = ["foo", ...newChocolateBars]
  return newChocolateBars
}