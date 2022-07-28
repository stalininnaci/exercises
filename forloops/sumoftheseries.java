public class sumoftheseries {
    public static void main(String args[]){
        float n=5;
        float sum=1;
        for(int i=1;i<=n;i++){
            float a=(1/i)^i;
            //float b=(float)Math.pow(a,i);
            sum=sum+a;
        }
        System.out.println(sum);
    }
}
