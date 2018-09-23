//     Author: Georgios P
//     Github: https://github.com/papadoc7
// HackerRank: hackerrank.com/papadoc

/*
Node is defined as 
  class Node {
     int data;
     Node next;
  }
*/

Node RemoveDuplicates(Node head) {
    if (head == null) {
        return null;
    }
    Node n = head;
    while (n.next != null) {
        if (n.data == n.next.data) {
            n.next = n.next.next;
        } else {
            n = n.next;
        }
    }
    return head;
}
