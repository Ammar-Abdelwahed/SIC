function filter (x, func)
{
    let newarray = [];
    for (let i = 0; i < x.length; i++)
    {
        if (func(x[i]))
        {
            newarray.push(x[i]);
        }
    }
    return newarray;
}

function even (n)
{
    return (n % 2 == 0);
}

y = [2,4,3,5,7,6,1];
z = filter(y, even);
console.log(z);
