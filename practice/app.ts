//any type if we dont want a type check

let x:any = 1

//unknown type when we dont know the type

let y:unknown = 1

if(typeof y === "number"){
    const res = x + 1
} else if(typeof y === "string"){
    const res = y.length
}