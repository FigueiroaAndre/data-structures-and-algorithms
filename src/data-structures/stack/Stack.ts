export interface IStack<T> {
    clear: () => void;
    size: () => number;
    push: (value: T) => void;
    pop: () => T;
    indexOf: (value: T) => number;
}

class Node<T> {
    value: T;
    previous: Node<T> | null;

    constructor(value: T, previousNode: Node<T> = null) {
        this.value = value;
        this.previous = previousNode;
    }
}

export default class Stack<T> implements IStack<T> {
    private length: number;
    private top: Node<T> | null;

    constructor() {
        this.length = 0;
        this.top = null;
    }

    clear(): void {
        while(this.length !== 0) {
            this.pop();
        }
    }

    size(): number {
        return this.length;
    }

    push(value: T): void {
        let newNode = new Node<T>(value, this.top);
        this.top = newNode;
        this.length++;
    }

    pop(): T {
        if (this.length === 0) {
            throw new RangeError('The stack is empty.');
        }

        let value = this.top.value;
        let nextTop = this.top.previous;
        this.top.previous = null;
        this.top = nextTop;
        this.length--;

        return value;
    }

    indexOf(value: T): number {
        let selectedNode = this.top;
        let index = -1;

        for(let i = 0; i < this.length; i++) {
            if (selectedNode.value == value) {
                index = i;
                break;
            }
            selectedNode = selectedNode.previous;
        }

        return index;
    }
}
