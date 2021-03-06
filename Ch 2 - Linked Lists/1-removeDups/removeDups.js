// Write code to remove duplicates from an unsorted linked list.

// Follow up: To reduce space complexity How would you solve this problem if a temporary buffer is not allowed? What does this do to time complexity?

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

//I - linkedList Head Node
//O - linkedList head Node
//C - ?
//E - n/a

//DQ - n/a
//DS - cache
//AP - while loop
//TR - sort LL?

//loop through each node, saving value to cache
//if subsequent node values exists in cache, delete them and update LL next vals.
//keep track of both previous and current nodes (two pointers)

function removeDups(head) {
  let currentNode = head;
  let previousNode;
  let valStorage = {};

  while (currentNode) {
    if (valStorage[currentNode.val]) {
      previousNode.next = currentNode.next;
    } else {
      valStorage[currentNode.val] = true;
      previousNode = currentNode;
    }
    currentNode = currentNode.next;
  }
}

// function removeDups(head) {
//   let staticNode = head;
//   let previousNode = staticNode;
//   let currentNode = staticNode.next;

//   while (staticNode && currentNode) {
//     if (staticNode.val === currentNode.val) {
//       previousNode.next = currentNode.next;
//     } else {
//       previousNode = currentNode;
//     }
//     currentNode = currentNode.next;
//     if (!currentNode) {
//       staticNode = staticNode.next;
//       previousNode = staticNode;
//       currentNode = staticNode ? staticNode.next : null;
//     }
//   }
//   return head;
// }

module.exports = removeDups;
