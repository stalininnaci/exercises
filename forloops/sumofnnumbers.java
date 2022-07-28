import java.util.*;
public class sumofnnumbers {
    public static void main(String args[]){
        int sum=0;
        Scanner sc=new Scanner(System.in);
        System.out.println("n=");
        final int n=sc.nextInt();
        for(int i=0;i<=n;i++){
            sum=sum+i;
            }
        System.out.println("sum of given number is="+sum);
    }
    
}
