// types in functions

function add(x:number,y:number): number | string {  //we add number | string to return only from on of them
    return x+y
}

const res = add(1,2)
console.log(res)



function makeName (fname:string, lname:string, mname?:string){  // we added the ? mark fot the mname specifiing that that mname is a optional one
    
}

makeName("puneeth","kanike")