class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }

    setValue(val) {
        this.val = val === undefined ? this.val : val;
    }

    getValue() {
        return this.val;
    }

    setNext(next) {
        this.next = next === undefined ? this.next : next;
    }

    getNext() {
        return this.next;
    }

    toString() {
        return `[${this.val}]`;
    }
}

class LinkedList {
    constructor(val=0) {
        this.head = new Node(val, null);
        this.tail = this.head;
        this.length = 1;
    }

    add(val=0) {
        let node = new Node(val, null);
        this.tail.setNext(node);
        this.tail = this.tail.getNext();
        this.length += 1;
    }

    get(index) {
        return (index === undefined || index < this.length -1) ? null : this.find(index).getValue();
    }

    find(index) {
        let find = this.head;
        let fIndex = 0;
        while(fIndex < index) {
            find = find.getNext();
            fIndex += 1;
        }
        return find;
    }

    delete(index) {
        if (index == 0) {
            this.head = this.head.getNext();
        } else {
            var pindex = index - 1;
            var pnode = this.find(pindex);
            pnode.next = pnode.next ? pnode.next.next : null;
        }
        this.length -= 1;
    }

    toString() {
        if (this.length == 0) {
            return;
        }
        var result = [];
        let find = this.head;
        while(find) {
            result.push(find.getValue());
            find = find.next;
        }
        return result.join('-');
    }
}

var linkArray = new LinkedList();
linkArray.add(1);
linkArray.add(2);
linkArray.add(3);
console.log(linkArray.toString());
linkArray.delete(2);
console.log(linkArray.toString());
linkArray.add(4);
console.log(linkArray.toString());

