//literals

let directions: "north" | "south";

let responseCode: 200 | 404 | 202 | 500; 

//these tells that the value you are going to asign to the variable within those values which you have specified
//if u try to asign a any other value it will give error
//eg
//responseCode = 600



//enums

enum SIze {
    Small = 100,
    Medium = 200,
    Large
}

var size:SIze = SIze.Small;

if(size === SIze.Small){

}

//string enums

enum Direction {
    up = "UP",
    down = "DOWN",
    left = "LEFT",
    right = "RIGHT"
}

console.log(Direction.down)





