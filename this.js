
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

var f = obj.myFunc
f()

// To conclude, this is point to the caller object. if the function call without caller this will refer to the global object.
