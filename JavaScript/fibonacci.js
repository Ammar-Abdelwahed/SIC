let number = parseInt(prompt("enter number of terms: "));

function fibonacci (num)
{
    let array = [], n1 = 0, n2 = 1, next;
    for (let i = 0; i < num; i++)
    {
        array.push(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
    return array;
}
x = fibonacci(number);
console.log(x);