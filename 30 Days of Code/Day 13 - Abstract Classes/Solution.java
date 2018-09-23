//     Author: Georgios P
//     Github: https://github.com/papadoc7
// HackerRank: hackerrank.com/papadoc

import java.util.*;

abstract class Book {
    String title;
    String ;
    Book(String t, String a) {
        title  = t;
         = a;
    }
    abstract void display();
}

class MyBook extends Book {
    int price;
    
    MyBook(String title, String , int price) {
        super(title, );
        this.price = price;
    }
    
    void display() {
        System.out.println("Title: "  + title);
        System.out.println(": " + );
        System.out.println("Price: "  + price);
    }
}

public class Solution {
   public static void main(String[] args) {
      Scanner sc     = new Scanner(System.in);
      String title   = sc.nextLine();
      String   = sc.nextLine();
      int price      = sc.nextInt();
      Book new_novel = new MyBook(title, , price);
      new_novel.display();
   }
}
