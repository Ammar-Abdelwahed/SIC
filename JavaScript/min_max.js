function min_max (x)
{
    let min = x[0], max = x[0];
    for (let i = 0; i < x.length; i++)
    {
        if (x[i] > max)
        {
            max = x[i];
        } 
        if (x[i] < min)
        {
            min = x[i];
        }
    }
    console.log("maximum number is " + max);
    console.log("minimum number is " + min);
}

min_max([1,2,5,10,-2,9,0]);