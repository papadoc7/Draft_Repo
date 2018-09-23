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

void preOrder(Node n) {
    if (n != null) {
        System.out.print(n.data + " ");
        preOrder(n.left);
        preOrder(n.right);
    }
}
