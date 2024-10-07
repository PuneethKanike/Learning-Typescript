"use strict";
//literals
let directions;
let responseCode;
//these tells that the value you are going to asign to the variable within those values which you have specified
//if u try to asign a any other value it will give error
//eg
//responseCode = 600
//enums
var SIze;
(function (SIze) {
    SIze[SIze["Small"] = 100] = "Small";
    SIze[SIze["Medium"] = 200] = "Medium";
    SIze[SIze["Large"] = 201] = "Large";
})(SIze || (SIze = {}));
var size = SIze.Small;
if (size === SIze.Small) {
}
//string enums
var Direction;
(function (Direction) {
    Direction["up"] = "UP";
    Direction["down"] = "DOWN";
    Direction["left"] = "LEFT";
    Direction["right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.down);
