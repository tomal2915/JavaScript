var a=[5,6,4,7,2,6],max=0,sum=0;
for(var i=0; i<a.length; i++){
    if(a[i]>max){
        max=a[i];
    }
}
console.log("Max is:",max);

for(i=0; i<a.length;i++){
    sum=a[i]+sum;
}
console.log("Sum is:",sum);

var b=[2,2,3,3,5,5,4,4,8,8,9];
var uniq=[];
var element=0,i,index=0;
for(i=0; i<b.length;i++){
    element=b[i];
    index = uniq.indexOf(element);
    if(index== -1){
        uniq.push(element);
    }
}
console.log(uniq);

var c=[2,2,3,3,5,4,4,8,8,9,2];
for(var i=0; i<c.length; i++){
    for(var j=i+1; j<c.length; j++){
        if(c[i] == c[j]){
            c.splice(j,1);
        }
    }
}
console.log("Using Splice:",c);

var string = "Mahabub cutiya khali ghumay";
var count=0;
for(var i=0; i<string.length; i++){
    if(string[i] == " " && string[i-1] != " "){
        count++;
    }
}
count++;
console.log("Count word:",count);

var string = "Mahabub cutiya khali ghumay";
var reverse = "";
console.log("Before reverse string:",string);
for(var i=0; i<string.length; i++){
    reverse = string[i] + reverse;
}
console.log("After reverse string:",reverse);