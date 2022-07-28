public class primenumbers {
    public static void main(String args[]){
        int n=17;
        int count=0;
        for(int i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                System.out.println("n is not a prime");
                count=0;
                break;
            }
            count = 1;
        }
            if(count==1){
                System.out.println(n+" is prime");
            }
    }
}

