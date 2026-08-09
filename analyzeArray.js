export default analyzeArray = function(arr)
{
    if(arr.length!=0)
    {
       let min = arr[0];
       let max = arr[0];
       let sum = 0;
       let length =0;
       arr.forEach((el)=>{ 
        if (el<min)
            min=el;
        if(el>max)
            max=el;
        length++;
        sum+=el;
       });
       let average=sum/length;
       return{average,min,max,length};
    }
    else

        return {
            average: 0,
            min: 0,
            max: 0,
            length: 0
        };

}