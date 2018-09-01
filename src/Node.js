module.exports = class Node {
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
