const Stack = require('../src/Stack.js')

var stack = new Stack(1);
stack.push(2);
stack.push(3);
console.log(stack.toString());
stack.pop();
console.log(stack.toString());
stack.push(4);
console.log(stack.toString());
stack.pop();
console.log(stack.toString());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.toString());
