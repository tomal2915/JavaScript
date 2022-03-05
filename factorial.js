//factorial using loop
var j=1;
for( var i=1; i<=5; i++){
    j=j*i;
}
console.log(j);

//factorial using reqursive function
function factorial(x){
    if(x==1){
        return 1;
    }else{
        return x * factorial(x-1);
    }
}
var f= factorial(5);
console.log(f);
