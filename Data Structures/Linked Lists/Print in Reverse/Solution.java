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

void ReversePrint(Node n) {
    if (n != null) {
        ReversePrint(n.next);
        System.out.println(n.data);
    }
}
