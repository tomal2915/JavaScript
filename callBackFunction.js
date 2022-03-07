function callBack(name,age,task){
    console.log("hello",name,"Age",age);
    task();
}
function washHand(){
    console.log("Wash your Hand");
}
function takeShower(){
    console.log("Take shower");
}
callBack("Rahim",25,washHand);
callBack("Karim",30,takeShower);