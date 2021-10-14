"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weigth, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weigth;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarNumber;
        this.profession = profession;
    }
    Professional.prototype.print = function (Professional) {
        console.log(this.name);
        console.log(this.age);
        console.log(this.genre);
        console.log(this.weight);
        console.log(this.height);
        console.log(this.hairColor);
        console.log(this.eyeColor);
        console.log(this.race);
        console.log(this.isRetired);
        console.log(this.nationality);
        console.log(this.oscarsNumber);
        console.log(this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
