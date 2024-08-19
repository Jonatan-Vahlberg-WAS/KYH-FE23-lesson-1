"use strict";
const _name = "Jonatan";
const age = 27;
const fullName = "Jonatan Vahlberg";
const courses = ["Typescript", "HTML/CSS"];
const courseIds = [986, 993];
const now = new Date(); // Direct declaration needs no explicit typing
const hourOfTheDay = now.getHours();
const isHungry = hourOfTheDay > 11 && hourOfTheDay < 13;
console.log("Introduction:");
console.log(_name); // Output: Jonatan
console.log(age); // Output: 27
console.log(fullName); // Output: Jonatan Vahlberg
console.log(courses); // Output: ["Typescript", "HTML/CSS"]
console.log(courseIds); // Output: [986, 993]
console.log(now); // Output: [current date and time]
console.log(hourOfTheDay); // Output: [current hour of the day]
console.log(isHungry); // Output: [true or false]
