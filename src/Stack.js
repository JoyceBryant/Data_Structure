const Node = require('./Node.js');
module.exports = class Stack {
    constructor(val=0) {
        this.head = new Node(val, null);
        this.length = 1;
    }

    push(val=0) {
        let node = new Node(val, null);
        node.setNext(this.head);
        this.head = node;
        this.length += 1;
    }

    pop(val=0) {
        if (!this.length) {
            console.log('stack is empty!!!');
            return;
        }
        this.head = this.head.next;
        this.length -= 1;
    }

    toString() {
        if (!this.length) {
            return 'stack is empty';
        }
        var result = [];
        let find = this.head;
        while(find) {
            result.push(find.getValue());
            find = find.next;
        }
        return result.reverse().join('-');
    }
}
