function max(x, y)
    {
        if (x > y)
        {
            return x;
        }
        else
        {
            return y;
        }
    }
  
    function knapSack(total_w, weights, prof, n)
    {

        if (n == 0 || total_w == 0)
            return 0;
  
        if (weights[n - 1] > total_w)
            return knapSack(total_w, weights, prof, n - 1);
  
       
        else
            return max(prof[n - 1] +
            knapSack(total_w - weights[n - 1], weights, prof, n - 1),
            knapSack(total_w, weights, prof, n - 1));
    }
       
    let profit = [ 60, 100, 120 ];
    let weight = [ 10, 20, 30 ];
    let W = 40;
    let n = profit.length;
 
    x = knapSack(W, weight, profit, n);
    console.log(x);