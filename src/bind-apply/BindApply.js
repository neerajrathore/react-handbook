let nameGet = {
    fName: "neeraj",
    getName: function() {
        return this.fName
    }
}

let nameFetch = function () {
    console.log(this.fName, "data")
}

// nameGet.getName is a funtion and nameget object pass its this to (nameGet.getName).
// The bind() method creates a new function where “this” refers to the parameter

// let nameDusra = nameGet.getName.bind(nameGet)
// console.log(nameDusra());  // working solution

let getMeName = nameFetch.bind(nameGet)
console.log(getMeName());

// ***************************
// call and apply 

let car = {
    rc: "12345",
    brand: "kia"
}

function getCarName (owner) {
    console.log(car.rc+car.brand, owner);
}

// getCarName.apply(car, ["neeraj"])
// getCarName.call(car, "neeraj")
