function factoiral (x)
{
    var total = 1;
    for (let i = x; i > 1; i--)
    {
        total *= i;
    }
    return total;
}

let f = factoiral(5);
console.log(f);