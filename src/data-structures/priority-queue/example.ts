import PriorityQueue from "./PriorityQueue";

let input = [4,8,14,1,3,22,5,2,9];
let minPQ = new PriorityQueue<number>(input);
let maxPQ = new PriorityQueue<number>(input, (v1,v2) => v1 > v2);

while (minPQ.size() !== 0) {
    let removedValue = minPQ.poll();
    console.log('[MIN-PQ]: ' + removedValue + ' was polled!!');
}
console.log('===')

while (maxPQ.size() !== 0) {
    let removedValue = maxPQ.poll();
    console.log('[MAX-PQ]: ' + removedValue + ' was polled!!');
}
console.log('===');

console.log('[MIN-PQ]: refiling with these values: ' + input);
input.forEach(value => minPQ.add(value));
console.log('[MIN-PQ]: current state of internal heap: ');
minPQ.out();
minPQ.remove(5);
console.log('[MIN-PQ]: 5 was removed!!');
console.log('[MIN-PQ]: current state of internal heap: ');
minPQ.out();