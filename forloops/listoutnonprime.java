import java.util.*;
public class listoutnonprime {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("upper limit is:");
        int n=sc.nextInt();
        for(int i=2;i<=n;i++){
            for(int j=2;j<i;j++){
                if(i%j==0){
                    System.out.print(i+" ");                    
                    break;
                }
        
        }
    }
 }
}