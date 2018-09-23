//     Author: Georgios P
//     Github: https://github.com/papadoc7
// HackerRank: hackerrank.com/papadoc

import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int i = 1;
        while (scan.hasNextLine()) { 
            System.out.println(i + " " + scan.nextLine());
            i++;
        }
        scan.close();
    }
}
