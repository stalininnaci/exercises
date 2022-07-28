public class primebwnumbers {
    /**
     * @param args
     */
    public static void main(String args[]){
        int count=0;
        int flag=1;
        System.out.println("prime numbers bw 1 to 100 are:");
        for(int i=2;i<=100;i++){
            for(int j=2;j<i;j++){
                if(i%j==0){
                    flag=0;
                    break;
                }
                flag=1;
            }
                if(flag==1){ 
                    count++;
                System.out.print(i+" ");
            }
        }
        System.out.println("\ntotal prime bw 1 to 100 is "+count);
    }
}
