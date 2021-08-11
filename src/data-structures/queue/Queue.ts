import LinkedList from "../linked-list/LinkedList";

export interface IQueue<T> {
    clear: () => void;
    size: () => number;
    enqueue: (value: T) => void;
    dequeue: () => T;
    contains: (value: T) => boolean;
}

export default class Queue<T> implements IQueue<T> {
    private linkedList: LinkedList<T>;

    constructor() {
        this.linkedList = new LinkedList<T>();
    }

    clear(): void {
        this.linkedList.clear();
    }

    size(): number {
        return this.linkedList.size();
    }

    enqueue(value: T) {
        this.linkedList.addLast(value);
    }

    dequeue(): T {
        return this.linkedList.removeFirst();
    }

    contains(value: T): boolean {
        return this.linkedList.contains(value);
    }
}