//interfaces in typescript

interface Person{
    name:string,
    age:number,
    height?: number,
    // hello: ()=> void
}

// const person : Person = {
//     name : "puneeth",
//     age : 12,
//     hello: function(){
//         console.log(this.name + " hi")
//     }
// }

// person.hello()

interface Employee extends Person {
    employeeId : number
}

const worker :Employee = {
    name:"p",
    age:23,
    height:175,
    employeeId:10
}


