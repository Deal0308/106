
function sayHello(name, lastName){
    console.log("Hello " + name + " " + lastName);
}

function sum(num1, num2){
    var res = num1 + num2;
    return res;
}

function printNumbers(){
    //print numbers from 1 to 10
    //except the 3 and 7

    list = [121,1515,534,115,54,854,9752,3654,21,54,162,158];
    //1. print every number by seperated
    //2. print the sum of the numbers
    //3. print the numbers that are greater than 200
    let sum = 0;
    for(let i = 0; i < list.length; i++){
    
    let num = list[i];
    }
    for(let i = 1; i <= 10; i++){
        if(i == 3 || i == 7){
            continue;
        }
        console.log(i);
        /*
        ! = not
        && = and
        ll = or
        */
    }
}
//DRY (Don't Repeat Yourself)- Jquery
//srp (Single Responsibility Principle)
    function init(){
        const firstName = "John";
    console.log("hello world");
    sayHello(name, "Doe");
    sayHello(John, "Doe");
    printNumbers();
    console.log(result);
}

window.onload = init;