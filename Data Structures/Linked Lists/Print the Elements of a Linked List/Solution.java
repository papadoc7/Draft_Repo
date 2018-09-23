//     Author: Georgios P
//     Github: https://github.com/papadoc7
// HackerRank: hackerrank.com/papadoc

/*
  Print elements of a linked list on console 

  Node is defined as 
  class Node {
     int data;
     Node next;
  }
*/

void Print(Node head) {
    Node n = head;
    while (n != null) {
        System.out.println(n.data);
        n = n.next;
    }
}
