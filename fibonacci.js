//using reqursive function
function fibonacci(n){
    if(n<=1){
        return n;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var fibo = fibonacci(9);
console.log("using reqursive function:",fibo);

//using loop
var n1=0, n2=1, n3, i, number=9;
for(i=2; i<=number; i++){
    n3=n1+n2;
    n1=n2;
    n2=n3;
}
console.log("using loop:",n3);

//using array
var fibo = [0,1], i;
for(i=2; i<=9; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log("using array:",fibo);
