function array_sum(x)
{
    var total = 0;
    for (let i = 0 ; i < x.length; i++)
    {
        
        total += x[i];
    }
    return total;
}


s = array_sum([1,2,3,4,5,6,7]);
console.log(s);




