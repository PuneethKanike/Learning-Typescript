"use strict";
//interfaces in typescript
const person = {
    name: "pueeth",
    age: 12,
    hello: function () {
        console.log(this.name + " hi");
    }
};
person.hello();
