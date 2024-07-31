// Basic Recursion

// Task 1
function calculateFactorial(number) {
  if (number === 0) return undefined;

  return number === 1 ? number : number * calculateFactorial(number - 1);
}

console.log("Factorial:", calculateFactorial(5));
console.log("Factorial:", calculateFactorial(10));
console.log("Factorial:", calculateFactorial(15));

// Task 2
function calculateFibonacci(n, currentIndex = 0, previous = 0, current = 1) {
  return currentIndex === n
    ? previous
    : calculateFibonacci(n, currentIndex + 1, current, previous + current);
}

console.log("Fibonacci:", calculateFibonacci(10));
console.log("Fibonacci:", calculateFibonacci(5));
console.log("Fibonacci:", calculateFibonacci(15));

// Recursion with Arrays

// Task 3
function findSumOfElementsInArray(array, currentIndex = 0, totalSum = 0) {
  if (array.length === 0) return undefined;

  totalSum = array[currentIndex] + totalSum;

  return currentIndex === array.length - 1
    ? totalSum
    : findSumOfElementsInArray(array, currentIndex + 1, totalSum);
}

console.log(
  "Sum of Array Elements:",
  findSumOfElementsInArray([1, 2, 3, 4, 5])
);
console.log(
  "Sum of Array Elements:",
  findSumOfElementsInArray([6, 7, 8, 9, 10])
);
console.log(
  "Sum of Array Elements:",
  findSumOfElementsInArray([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
);

// Task 4
function findMaxElementInArray(array, currentIndex = 0, maxElement = array[0]) {
  if (array.length === 0) return undefined;

  maxElement =
    array[currentIndex] > maxElement ? array[currentIndex] : maxElement;

  return currentIndex === array.length
    ? maxElement
    : findMaxElementInArray(array, currentIndex + 1, maxElement);
}

console.log(
  "Maximum Element in Array:",
  findMaxElementInArray([1, 3, 5, 3, 2, 1])
);
console.log(
  "Maximum Element in Array:",
  findMaxElementInArray([1, 7, 5, 3, 2, 1])
);

// String Manipulation with Recursion

// Task 5
function reverseString(stringToReverse, currentIndex, reversedString = "") {
  if (stringToReverse === "") return "";

  if (stringToReverse === null) return undefined;

  if (currentIndex === undefined) currentIndex = stringToReverse.length - 1;

  reversedString += stringToReverse[currentIndex];

  return currentIndex === 0
    ? reversedString
    : reverseString(stringToReverse, currentIndex - 1, reversedString);
}

console.log("Reversed String:", reverseString("Prat"));

// Task 6
function isPalindromeString(stringToCheck, start = 0, end) {
  if (stringToCheck === "") return true;

  if (stringToCheck === null) return false;

  if (end === undefined) end = stringToCheck.length - 1;

  const isPalindrome =
    stringToCheck[start] === stringToCheck[end] ? true : false;

  return start >= end || isPalindrome === false
    ? isPalindrome
    : isPalindromeString(stringToCheck, start + 1, end - 1);
}

console.log("Palindrome String:", isPalindromeString("WOW"));
console.log("Palindrome String:", isPalindromeString("madam"));
console.log("Palindrome String:", isPalindromeString("Not"));

// Recursive Search

// Task 7 - Binary Search on Sorted Array
function searchNumberInarray(array, numberToSearch, start = 0, end) {
  if (array.length === 0) return -1;

  if (numberToSearch === null) return -1;

  if (end === undefined) end = array.length - 1;

  const middleElement = Math.floor((start + end) / 2);

  if (start > end) return "Number not found!";

  if (numberToSearch === array[middleElement]) {
    return middleElement;
  } else if (numberToSearch < array[middleElement]) {
    return searchNumberInarray(array, numberToSearch, start, middleElement - 1);
  } else {
    return searchNumberInarray(array, numberToSearch, middleElement + 1, end);
  }
}

const arrayToSearch = [1, 3, 5, 7, 9, 11, 13];

console.log("Search Number In Array:", searchNumberInarray(arrayToSearch, 3));
console.log("Search Number In Array:", searchNumberInarray(arrayToSearch, 14));
console.log("Search Number In Array:", searchNumberInarray(arrayToSearch, 11));

// Task 8
function findOccurenceCountOfElement(
  array,
  elementToCount,
  start = 0,
  count = 0
) {
  if (array.length === 0 || elementToCount === null) return 0;

  if (array[start] === elementToCount) {
    count += 1;
  }

  return start === array.length - 1
    ? count
    : findOccurenceCountOfElement(array, elementToCount, start + 1, count);
}

console.log(
  "Element Count:",
  findOccurenceCountOfElement([1, 2, 4, 1, 3, 4, 1], 1)
);

// Tree Traversal

// Tree Creation-
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right = new TreeNode(5);
root.right.left = new TreeNode(6);
console.log("Tree:", root);

// Task 9 - Inorder Traversal of a Binary Tree
function inOrderTraversal(node) {
  if (node === null) return;

  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

console.log("In-order Tree Traversal:", inOrderTraversal(root));

// Task 10 - Depth of Binary Tree
function calculateDepthOfTree(node) {
  if (node === null) return 0;

  const leftDepth = calculateDepthOfTree(node.left);
  const rightDepth = calculateDepthOfTree(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

console.log(calculateDepthOfTree(root));
