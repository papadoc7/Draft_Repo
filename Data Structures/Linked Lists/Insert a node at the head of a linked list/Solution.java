//     Author: Georgios P
//     Github: https://github.com/papadoc7
// HackerRank: hackerrank.com/papadoc

/*
  Insert Node at the beginning of a linked list 

  Node is defined as 
  class Node {
     int data;
     Node next;
  }
*/

Node Insert(Node head, int x) {
    Node n = new Node();
    n.data = x;
    n.next = head;
    return n;
}
