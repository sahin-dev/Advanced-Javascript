
// console.log(this) //Always refer to the global object (without strict mood)

// function checkThis(){
//     console.log(this) //Refer to the strict mood
// }

// checkThis()


var obj = {
    myFunc:function(){
        // function insider(){
        //     console.log(this) // gobal object
        // }
        // insider()
        console.log(this)
        //console.log(this) // refer to the obj
    }

}

// var f = obj.myFunc
// f()

// To conclude, this is point to the caller object. if the function call without caller this will refer to the global object.


//call, bind, apply
//call and apply method work same but difference is apply takes parameters list as array
//bind actually return a new function with fixed 'this'


function func(a,b,c)
{
    console.log(this)
    console.log(a,b,c)
}

// func.call({name:"Sahin"}, 1,2,3) //call method

// func.apply({name:'Siraj'}, [1,2,3]) // apply

// var f = func.bind({name:"Siraj"}, [1,2,3]) // return new function with bounded this

//Fat Arrow Function-> To solve this stability

var add = (a,b)=> a+b;
console.log(add(1,2))