var a = 11; //global
console.log(" This a paragraph created to display global scope of var a whose value is :"+a);

function helo() {
    console.log("inside a function");
    var b = 6;
   console.log(" Inside a function:"+b);
}
helo();