import LinkedList from "../linked-list/LinkedList";

export interface IStack<T> {
    clear: () => void;
    size: () => number;
    push: (value: T) => void;
    pop: () => T;
    contains: (value: T) => boolean;
}

export default class Stack<T> implements IStack<T> {
    private linkedList:  LinkedList<T>;

    constructor() {
        this.linkedList = new LinkedList<T>();
    }

    clear(): void {
        this.linkedList.clear();
    }

    size(): number {
        return this.linkedList.size();
    }

    push(value: T): void {
        this.linkedList.addLast(value);
    }

    pop(): T {
        let value = this.linkedList.removeLast();
        return value;
    }

    contains(value: T): boolean {
        return this.linkedList.contains(value);
    }
}
