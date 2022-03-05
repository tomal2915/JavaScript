var a=5,b=6,temp=0;
console.log("Before swap:",a,b);
temp=a;
a=b;
b=temp;
console.log("After swap:",a,b);

var p=8,q=9;
console.log("Before swap:",p,q);
[p,q]=[q,p];
console.log("After swap:",p,q);

var x=6,y=7;
x=x+y;
y=x-y;
x=x-y;
console.log(x,y);