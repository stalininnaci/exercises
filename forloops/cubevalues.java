import java.util.Scanner;
public class cubevalues {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("the number is");
        int n=sc.nextInt();
        for(int i=1;i<=n;i++){
            int cube=i*i*i;
            System.out.println("cube value of "+i+" is "+cube);
        }
    }
}
