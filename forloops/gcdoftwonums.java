import java.util.Scanner;
public class gcdoftwonums{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("first number:");
        int a=sc.nextInt();
        Scanner sc1=new Scanner(System.in);
        System.out.println("second number:");
        int b=sc1.nextInt();
        for(int i=2;i<b;i++){
            if(a%i==0&&b%i==0){
                System.out.println("\nGCD of given numbers:"+i);
            }
        }
    }
}