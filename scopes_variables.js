//var -> global scope, function scope
//let,const -> global scope, function scopr, block scope

//gloabl scope
//   function scope
//   block scope -> ony for let and const

// {
//     var i = 10
// }
// console.log(i)  //can be accessed by outside of the block scope
// for(var c = 0;c<10;c++){} // ignore the block scope and variable c is accessiable from outside of the loop



// {
//     let j = 10
// }

//console.log(j) // can't access from outside of the block


//Variable Hositing -> var keyword can be hoisted but not let and const
// console.log(a)
// var a = 1

//What is scope chain? Scope chain in javascript in lexically-> how the code is written
// Javascript try to resolve a variable in the order the programmme is written
// first check own scope and then check outer scopes and checking until it reach global scope

//What is function closure
var foo = []
for(var i = 0;i<10;i++){
    (function(){
        let y = i 
        foo[i] = function (){
            return y
        }
    })()
    
}

console.log(foo[1]())