export interface ILinkedList<T> {
  clear: () => void;
  size: () => number;
  isEmpty: () => boolean;
  toArray: () => T[];
  addFirst: (value: T) => void;
  addLast: (value: T) => void;
  add: (value: T, index: number) => void;
  removeFirst: () => T;
  removeLast: () => T;
  remove: (index: number) => T;
  indexOf: (value: T) => number;
  contains: (value: T) => boolean;
}

class Node<T> {
  value: T;
  previous: Node<T> | null;
  next: Node<T> | null;

  constructor(value: T, previousNode: Node<T> = null, nextNode: Node<T> = null) {
    this.value = value;
    this.previous = previousNode;
    this.next = nextNode;
  }
}

export default class LinkedList<T> implements ILinkedList<T> {
  private length: number;
  private head: Node<T> | null;
  private tail: Node<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  clear(): void {
    let selectedNode = this.head;

    while(selectedNode) {
      let nextNode = selectedNode.next;
      selectedNode.next = null;
      selectedNode.previous = null;
      selectedNode = nextNode;
    }

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  toArray(): T[] {
    let array = [] as T[];
    let selectedNode = this.head;

    while(selectedNode) {
      array.push(selectedNode.value);
      selectedNode = selectedNode.next;
    }

    return array;
  }

  addFirst(value: T): void {
    if (this.isEmpty()) {
      this.head = new Node<T>(value);
      this.tail = this.head;
      this.length = 1;
    } else {
      let newNode = new Node<T>(value, null, this.head);
      newNode.next.previous = newNode;
      this.head = newNode;
      this.length++;
    }
  }

  addLast(value: T): void {
    if (this.isEmpty()) {
      this.addFirst(value);
    } else {
      let newNode = new Node<T>(value, this.tail, null);
      newNode.previous.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  add(value: T, index: number): void {
    if (index < 0 || index > this.length ) {
      throw new RangeError(`Invalid index. Index is ${index}, but linked length = ${this.length}`);
    }
    else if (this.isEmpty() || index === 0) {
      this.addFirst(value);
    } else if (index === this.length) {
      this.addLast(value);
    } else {
      let pointer = this.selectNodeByIndex(index - 1);
      let newNode = new Node<T>(value, pointer, pointer.next);
      pointer.next.previous = newNode;
      pointer.next = newNode;
      this.length++;
    }
  }

  removeFirst(): T {
    let value: T;

    if (this.length === 0) {
      throw new RangeError('Cannot remove element from an empry list.');
    } else if (this.length === 1) {
      value = this.head.value;
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      value = this.head.value;
      this.head = this.head.next;
      this.head.previous.next = null;
      this.head.previous = null;
      this.length--;
    }

    return value;
  }

  removeLast(): T {
    if (this.length === 0 || this.length === 1) {
      return this.removeFirst();
    } else {
      let value = this.tail.value;
      this.tail = this.tail.previous;
      this.tail.next.previous = null;
      this.tail.next = null;
      this.length--;
      return value;
    }
  }

  remove(index: number): T {
    if (index < 0 || index >= this.length ) {
      throw new RangeError(`Invalid index. Index is ${index}, but linked length = ${this.length}`);
    } else if (index === 0) {
      return this.removeFirst();
    } else if (index === this.length - 1) {
      return this.removeLast();
    } else {
      let pointer = this.selectNodeByIndex(index);

      pointer.previous.next = pointer.next;
      pointer.next.previous = pointer.previous;
      pointer.next = null;
      pointer.previous = null;
      this.length--;
      return pointer.value;
    }
  }

  indexOf(value: T): number {
    let selectedNode = this.head;
    let index = -1;

    for(let i = 0; i < this.length; i++) {
      if (selectedNode.value === value) {
        index = i;
        break;
      }
      selectedNode = selectedNode.next;
    }

    return index;
  }

  contains(value: T): boolean {
    return this.indexOf(value) !== -1;
  }

  // details(): void {
  //   // useful for debug
  //   console.log(`LIST SIZE: ${this.length}`);
  //   console.log('LIST HEAD:')
  //   console.log(this.head);
  //   console.log('LIST TAIL:');
  //   console.log(this.tail);
  //   console.log(`LIST NODES:`);

  //   for (let selectedNode = this.head; selectedNode; selectedNode = selectedNode.next) {
  //     console.log(selectedNode);
  //   }
  // }

  private selectNodeByIndex(index: number): Node<T> {
    if (index < 0 || index > this.length ) {
      throw new RangeError(`Invalid index. Index is ${index}, but linked length = ${this.length}`);
    } else {
      let selectedNode = this.head;

      for(let i = 0; i < index; i++) {
        selectedNode = selectedNode.next;
      }
      return selectedNode;
    }
  }

}
