let operator = prompt('enter operator ( either +, -, * or / ): ');


let number1 = parseFloat(prompt('enter first number: '));
let number2 = parseFloat(prompt('enter second number: '));

function calculator (x, y, op)
{
    let result;

    if (op == '+')
    {
        result = x + y;
    }
    else if (op == '-')
    {
        result = x - y;
    }
    else if (op == '*')
    {
        result = x * y;
    }
    else if (op == "/")
    {
        result = x / y;
    }
    
    return result;
}

x = calculator(number1, number2, operator);
console.log(x);
