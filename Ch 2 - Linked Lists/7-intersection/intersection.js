// Given the heads of two singly linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value That is if the kth node of the first linked list is the exact same node by reference as teh jth node of the second linked list then they are intersecting.

/*
Example:
ll1 = 1 -> 2 -> 3
                 \
ll2 =   7 -> 9 -> 4 -> 5 -> 6
return 4 -> 5 -> 6 // the node with value of 4 and next of 5

return false if there is no intersection
*/

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

// I - Two pointers to LL heads
// O - If true, same node | else false
// C - Time O(n) | Space O(n) | min/max size of LL
// E/DQ's - null heads, only one head

// DS - Map() (to store node refs)
// AP - two while loops
// TR - n/a

// 1. loop through each node of LL1, adding node refs to Map()
// 2. loop through each node of LL2, checking if Map() contains node
    // if yes, return node | else return false

function Node(val) {
  this.val = val;
  this.next = null;
}

const intersection = (head1, head2) => {
  let currentListOneHead = head1;
  let currentListTwoHead = head2;
  let listOneSize = 0;
  let listTwoSize = 0;

  while (currentListOneHead || currentListTwoHead) {
    if (currentListOneHead) {
      listOneSize++;
      currentListOneHead = currentListOneHead.next;
    }
    if (currentListTwoHead) {
      listTwoSize++;
      currentListTwoHead = currentListTwoHead.next;
    }
  }

  let longerListNode = listOneSize >= listTwoSize ? head1 : head2;
  let shorterListNode = longerListNode === head1 ? head2 : head1;

  for (var i = 1; i <= Math.abs(listOneSize - listTwoSize); i++) {
    longerListNode = longerListNode.next;
  }

  while (longerListNode) {
    if (longerListNode === shorterListNode) {
      return longerListNode;
    }
    longerListNode = longerListNode.next;
    shorterListNode = shorterListNode.next;
  }
  return false;
};


module.exports = intersection;
