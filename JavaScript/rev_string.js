function reverse(str)
{
    var newstr = "";
    for (var i = str.length - 1; i >= 0; i--)
    {
        newstr += str[i];
    }
    return newstr;
}


x = reverse("my name is ammar")
console.log(x)