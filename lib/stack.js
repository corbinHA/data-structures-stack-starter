// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(top) {
    this.top = top;
    this.length = 0;
  }

  push(val) {
    let newValue = new Node(val);
    if (this.length > 0) {
      newValue.next = this.top
      this.top = newValue
    } else {
      this.top = newValue
    }
    this.length++
    return this.length
  }

  pop() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      const oldTop = this.top.value
      this.top = null
      this.length--
      return oldTop;
    } else {
      const oldTop = this.top.value
      this.top = this.top.next
      this.length--
      return oldTop
    }
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;


let stack = new Stack()
console.log(stack)
stack.push('a');
console.log(stack)
