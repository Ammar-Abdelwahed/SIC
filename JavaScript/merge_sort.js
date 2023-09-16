function merge_sort(array)
{
    let arr1 = [], arr2 = [], sorted_arr = []
    for ( let i = 0; i < (array.length / 2); i++)
        {
            arr1.push(array[i]);
        }
    for (let i = (Math.floor(array.length / 2)) + 1; i < array.length; i++)
        {
            arr2.push(array[i]);
        }
        
    function sort (x,y)
        {
            var i = 0, j = 0, n = 0, new_array = [];
            while (i < x.length && j < y.length)    
                {    
                    if(x[i] <= y[j])    
                    {    
                        new_array[n] = x[i];      
                        i++;    
                    }    
                    else    
                    {    
                        new_array[n] = y[j];
                        j++;    
                    }    
                    n++;    
                }    
            while (i < x.length)    
                {    
                    new_array[n] = x[i];    
                    i++;    
                    n++;    
                }    
            
            while (j < y.length)    
                {    
                    new_array[n] = y[j];    
                    j++;    
                    n++;    
                }    
         return new_array;       
        }
        sorted_arr = sort(arr1, arr2);
        for (let i = 0; i < sorted_arr.length; i ++)
    {
        if (sorted_arr[i] > sorted_arr[i + 1])
        {
            merge_sort(sorted_arr);
        
        }
        else
        {
            return sorted_arr;
        }
        
    }


    return sorted_arr;
}

x = merge_sort([1,3,0,8,-1,2,6]);
for (let i = 0; i < x.length; i++)
{
    console.log(x[i]);
}


