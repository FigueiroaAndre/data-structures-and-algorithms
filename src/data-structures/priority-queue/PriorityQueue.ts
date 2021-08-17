import { start } from "repl";

export interface IPriorityQueue<T> {
    clear: () => void;
    size: () => number;
    add: (value: T) => void;
    poll: () => T;
    remove: (value: T) => void;
}

function defaultComparisonFunction<T>(value1: T, value2: T) {
    return value1 < value2; // default: minHeap
}

export default class PriorityQueue<T> implements IPriorityQueue<T> {
    private heapArray: T[];
    private comparisonFunction: (value1: T, value2: T) => boolean;

    constructor(initialValues: T[] = [], comparisonFunction: (value1: T, value2: T) => boolean = defaultComparisonFunction) {
        this.comparisonFunction = comparisonFunction;
        this.heapArray = [];
        initialValues.forEach(value => this.add(value));
    }

    clear(): void {
        this.heapArray = [];
    }

    size(): number {
        return this.heapArray.length;
    }

    add(value: T): void {
        this.heapArray.push(value);
        this.bubbleUp(this.heapArray.length - 1);
    }

    poll(): T {
        if (this.size() === 0) {
            throw new RangeError('There is no element in the priority queue.');
        }
        else if (this.size() === 1) {
            return this.heapArray.pop();
        }

        this.swapElements(0, this.size() - 1);
        let polledValue = this.heapArray.pop();
        this.bubbleDown(0);

        return polledValue;
    }
    
    remove(value: T): void {
        let currentIndex = this.heapArray.findIndex(heapElement => heapElement === value);

        if (currentIndex === -1) {
            throw new RangeError(`${value} is not in the priority queue.`);
        }

        if (this.size() === 0 || this.size() === 1) {
            this.poll();
            return;
        }

        this.swapElements(currentIndex, this.size() -1);
        this.heapArray.pop();

        if (currentIndex === 0) this.bubbleDown(0);
        else if (this.comparisonFunction(this.heapArray[currentIndex], this.heapArray[this.getParentIndex(currentIndex)])) {
            this.bubbleUp(currentIndex);
        } else {
            this.bubbleDown(currentIndex);
        }
    }

    out(): void {
        console.log(this.heapArray + '\n');
    }

    private getLeftChildIndex(currentIndex: number): number {
        return 2 * currentIndex + 1;
    }

    private getRightChildIndex(currentIndex: number): number {
        return 2 * currentIndex + 2;
    }

    private getParentIndex(currentIndex: number): number {
        return Math.floor((currentIndex - 1)/2);
    }

    private swapElements(indexFirst: number, indexSecond: number): void {
        let valueFirst = this.heapArray[indexFirst];
        this.heapArray[indexFirst] = this.heapArray[indexSecond];
        this.heapArray[indexSecond] = valueFirst;
    }

    private bubbleUp(currentIndex: number): void {
        if (currentIndex === 0) return;

        let selectedValue = this.heapArray[currentIndex];
        let parentIndex = this.getParentIndex(currentIndex);
        let parentValue = this.heapArray[parentIndex];
        if (this.comparisonFunction(selectedValue, parentValue)) {
            this.swapElements(currentIndex, parentIndex);
            this.bubbleUp(parentIndex);
        }
    }

    private bubbleDown(currentIndex: number): void {
        let selectedValue = this.heapArray[currentIndex];
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);
        let hasLeftChild = leftChildIndex < this.size();
        let hasRightChild = rightChildIndex < this.size();
        let leftChildValue = this.heapArray[leftChildIndex];
        let rightChildValue = this.heapArray[rightChildIndex];

        if (hasRightChild) {
            let prioritizedChildIndex;
            if (rightChildValue === leftChildValue) prioritizedChildIndex = leftChildIndex;
            else {
                prioritizedChildIndex = this.comparisonFunction(rightChildValue, leftChildValue) ? rightChildIndex : leftChildIndex;
            }
            let prioritizedChildValue = this.heapArray[prioritizedChildIndex];

            if (this.comparisonFunction(prioritizedChildValue, selectedValue)) {
                this.swapElements(prioritizedChildIndex, currentIndex);
                this.bubbleDown(prioritizedChildIndex);
            }
        } else if (hasLeftChild && this.comparisonFunction(leftChildValue, selectedValue)) {
            this.swapElements(leftChildIndex, currentIndex);
            this.bubbleDown(leftChildIndex);
        }
    }
}