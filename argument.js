function addNumber(num1,num2){
    var sum=0;
    for(var i=0; i<arguments.length; i++){
        const num = arguments[i];
        console.log("Argument %d",i,":",num);
        sum = sum+arguments[i];
    }
    console.log("Sum:",sum);
}
addNumber(2,5,8,6,4);