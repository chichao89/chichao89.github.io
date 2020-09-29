 var array1 = [];
 var array2 = [];
 var arraySum = [];
 function arrayaddJS(array1,array2){
    console.log("Calling arrayJS");
    for(var i = 0, y = 0; (i < array1.length && y < array2.length); i++, y++)
    {
        arraySum[i] = array1[i]+array2[y];        
    }
    console.log(arraySum);
}