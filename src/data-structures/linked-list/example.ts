import LinkedList from './LinkedList';


let list = new LinkedList<number>();
console.log('\nCREATING NEW EMPTY LIST');
console.log(list.toArray());

console.log('\nADD 8 IN THE START OF THE LINKED LIST');
list.addFirst(8);
console.log(list.toArray());


console.log('\nADD 7 IN THE START OF THE LINKED LIST');
list.addFirst(7);
console.log(list.toArray());

console.log('\nADD 27 IN THE END OF THE LINKED LIST');
list.addLast(27);
console.log(list.toArray());

console.log('\nADD 9 IN THE INDEX 1 OF THE LINKED LIST');
list.add(9, 1);
console.log(list.toArray());

console.log('\nCLEAR THE LIST');
list.clear();
console.log(list.toArray());

console.log('\nADD 8 IN THE START OF THE LINKED LIST');
list.addFirst(8);
console.log(list.toArray());

console.log('\nADD 7 IN THE START OF THE LINKED LIST');
list.addFirst(7);
console.log(list.toArray());

let removedElement = list.removeFirst();
console.log(`\nREMOVE ${removedElement} FROM THE START OF THE LINKED LIST`);
console.log(list.toArray());

console.log('\nADD 9 IN THE START OF THE LINKED LIST');
list.addFirst(9);
console.log(list.toArray());

console.log('\nADD 0 IN THE START OF THE LINKED LIST');
list.addFirst(0);
console.log(list.toArray());

console.log('\nADD 7 IN THE START OF THE LINKED LIST');
list.addFirst(7);
console.log(list.toArray());

removedElement = list.removeLast();
console.log(`\nREMOVE ${removedElement} FROM THE END OF THE LINKED LIST`);
console.log(list.toArray());

console.log('\nADD 4 IN THE INDEX 2 OF THE LINKED LIST');
list.add(4, 2);
console.log(list.toArray());

console.log('\nADD 15 IN THE END OF THE LINKED LIST');
list.addLast(15);
console.log(list.toArray());

removedElement = list.remove(3);
console.log(`\nREMOVE ${removedElement} IN THE INDEX 3 OF THE LINKED LIST`);
console.log(list.toArray());

console.log(`\nINDEX OF 4 IS ${list.indexOf(4)}`);
console.log(`INDEX OF 0 IS ${list.indexOf(0)}`);
console.log(`INDEX OF 9 IS ${list.indexOf(9)}`);

console.log(`\nTHE LIST CONTAINS 15 ? ${list.contains(15)}`);
console.log(`THE LIST CONTAINS 27 ? ${list.contains(27)}`);
console.log(`THE LIST CONTAINS 9 ? ${list.contains(9)}`);

// console.log('\n=====LIST DETAILS=====');
// list.details() // uncomment method in the class declaration;
