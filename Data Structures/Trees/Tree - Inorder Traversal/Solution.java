//     Author: Georgios P
//     Github: https://github.com/papadoc7
// HackerRank: hackerrank.com/papadoc

/* 
Node is defined as  

class Node {
    int data;
    Node left;
    Node right;
}

*/

void inOrder(Node n) {
    if (n != null) {
        inOrder(n.left);
        System.out.print(n.data + " ");
        inOrder(n.right);
    }
}
