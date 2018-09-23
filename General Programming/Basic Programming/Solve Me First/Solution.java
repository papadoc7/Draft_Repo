//     Author: Georgios P
//     Github: https://github.com/papadoc7
// HackerRank: hackerrank.com/papadoc

import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        /* Save input */
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();
        scan.close();

        /* Calculate sum */
        int sum = solveMeFirst(a, b);

        /* Print output */
        System.out.println(sum);
    }

    static int solveMeFirst(int a, int b) {
        return a + b;
    }
}
