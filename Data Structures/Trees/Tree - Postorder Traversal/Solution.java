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

void postOrder(Node n) {
    if (n != null) {
        postOrder(n.left);
        postOrder(n.right);
        System.out.print(n.data + " ");
    }
}
