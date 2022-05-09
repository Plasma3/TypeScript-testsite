"use strict";
const app = document.getElementById("app");
const p = document.createElement("P");
p.textContent = "Hello World!";
const input = document.createElement("input");
input.value = "Init";
input.addEventListener("input", function (event) {
    const target = event.target;
    console.log(target.value);
    p.textContent = target.value;
});
app === null || app === void 0 ? void 0 : app.appendChild(p);
app === null || app === void 0 ? void 0 : app.appendChild(input);
const div = document.createElement("div");
class Person {
    constructor(name = "Alice", age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
}
function PersonObject(person) {
    let outputDiv = document.createElement("div");
    outputDiv.setAttribute("style", "background-color: lightsteelblue");
    let hName = document.createElement("h2");
    hName.textContent = person.name.toString();
    outputDiv.appendChild(hName);
    if (person.age != null) {
        let hAge = document.createElement("h2");
        hAge.textContent = person.age.toString();
        outputDiv.appendChild(hAge);
    }
    if (person.country != null) {
        let hCountry = document.createElement("h2");
        hCountry.textContent = person.country.toString();
        outputDiv.appendChild(hCountry);
    }
    return outputDiv;
}
let foo = 1;
app === null || app === void 0 ? void 0 : app.appendChild(PersonObject(new Person("Bob", 43, "USA")));
app === null || app === void 0 ? void 0 : app.appendChild(PersonObject(new Person("Bob", 43)));
