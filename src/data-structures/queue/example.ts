import Queue from "./Queue";

const elements: string[] = ['Fizz', 'Buzz', 'FizzBuzz', 'BuzzFizz', 'Pi', 'Euler']
const queue = new Queue<string>();

elements.forEach(element => {
    queue.enqueue(element);
});

let orderFlag = true;

elements.forEach(element => {
    orderFlag = orderFlag && queue.dequeue() === element;
});

const message = orderFlag
    ? 'The elements have been removed in the same order they were added. (OK)'
    : 'The elements HAVE NOT been removed in the same order they were added. (WRONG)';
console.log(message);