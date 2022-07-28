public class lastprimeofgiven {
    public static void main(String args[]){
        int n=50;
        int flag=1;
        int i;
        for( i=n;i>=2;i--){
            for(int j=2;j<i;j++){
                if(i%j==0){
                    //System.out.println(i);
                    flag=0;
                    break;
                }
                else
                    flag=1;
            }
            if(flag==1){
            System.out.println(i);
            break;}
        }
        
    }
}
