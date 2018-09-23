//     Author: Georgios P
//     Github: https://github.com/papadoc7
// HackerRank: hackerrank.com/papadoc

import java.util.Scanner;
import java.math.BigInteger;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        scan.close();
        System.out.println(factorial(n));
    }
    
    private static BigInteger factorial(int n) {
        BigInteger result = BigInteger.ONE;
        while (n > 1) {
            result = result.multiply(BigInteger.valueOf(n));
            n--;
        }
        return result;
    }
}
