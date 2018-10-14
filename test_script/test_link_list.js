const LinkedList = require('../src/LinkedList.js')

var linkArray = new LinkedList();
linkArray.add(1);
linkArray.add(2);
linkArray.add(3);
console.log(linkArray.toString());
linkArray.delete(2);
console.log(linkArray.toString());
linkArray.add(4);
console.log(linkArray.toString());
