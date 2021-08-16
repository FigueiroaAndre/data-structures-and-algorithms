import PriorityQueue from "./PriorityQueue";

let pq = new PriorityQueue<number>();
let input = [4,8,14,1,3,22];

input.forEach(value => {
    pq.add(value);
    console.log(value + ' was added!!');
    pq.out();
});

let removedValue = pq.poll();
console.log(removedValue + ' was removed!!');

pq.add(2);
console.log('2 was added!!');

removedValue = pq.poll();
console.log(removedValue + ' was removed!!');

pq.add(4);
console.log('4 was added!!');

removedValue = pq.poll();
console.log(removedValue + ' was removed!!');

pq.add(5);
console.log('5 was added!!');

pq.add(9);
console.log('9 was added!!');

while(pq.size() > 0) {
    removedValue = pq.poll();
    console.log(removedValue + ' was removed!!');
}