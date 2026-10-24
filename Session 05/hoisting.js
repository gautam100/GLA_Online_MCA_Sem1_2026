//hoisting
let fn1 = function(){
    //var a
    console.log(a) //undefined
    var a = 10
}

fn1() //calling function

//-------------------------------------

fn2() //calling function

//TDZ: Temporal Dead Zone
function fn2(){
    let a = 10
    console.log(a) //ReferenceError
}

//-------------------------------------
fn3() //calling function

function fn3(){
    //TDZ problem
    const a = "JS"
    //a = "Node"
    console.log(a)

    
}