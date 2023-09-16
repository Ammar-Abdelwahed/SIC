function reverse(str)
{
    var newstr = "";
    for (var i = str.length - 1; i >= 0; i--)
    {
        newstr += str[i];
    }
    return newstr;
}
function palindrome (str)
{
    if (str == reverse(str))
    {
        console.log(str + " is a palindorme")
    }
    else
    {
        console.log(str + " is not a palindorme")
    }
}

palindrome("noon")
