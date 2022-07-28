public class perfectnumbers {
    public static void main(String args[]){
        int sum;
        System.out.println("perfect numbers b/w 1 to 500 are ");
        for(int i=1;i<=500;i++){
            sum=0;
            for(int j=1;j<i;j++){
                if(i%j==0){
                    sum=sum+j;
                }
            }
                if(sum==i){
                    System.out.println(i);
                   //sum=0;
                }
            
        }
    }
}
