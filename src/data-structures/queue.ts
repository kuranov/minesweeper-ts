class Node<T> {
    public value: T;
    public next: Node<T> | null = null;

    constructor(value: T){
        this.value = value
        this.next = null;
    }
}

export class Queue<T> {
    public first: Node<T> | null = null;
    public last: Node<T> | null = null;
    public size = 0;

    constructor(){}

    enqueue(value: T){
        var newNode = new Node<T>(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            if (this.last) {
                this.last.next = newNode;
            }
            this.last = newNode;
        }
        return ++this.size;
    }
  
    dequeue(){
        if(!this.first) {
            return null;
        }
  
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
  }