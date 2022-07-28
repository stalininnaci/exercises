public class sumofdigits {
    public static void main(String args[]){
        int n=1468;
        int sum=0;
        for(int i=n;i>0;i/=10){
           int a=i%10;
           sum=sum+a;
        }
        System.out.println(sum);
    }
}
