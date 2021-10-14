"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, realeseYear, nationality, genere) {
        this.title = title;
        this.realeseYear = realeseYear;
        this.nationality = nationality;
        this.genere = genere;
    }
    Movie.prototype.printMovie = function () {
        var fullMovie = "";
        var pertenece = 'No';
        if (this.isMCU) {
            pertenece = "Si";
        }
        fullMovie += "Titulo: " + this.title + " \nA\u00F1o de estreno: " + this.realeseYear + "\nActores que participan en la pelicula: \n";
        for (var _i = 0, _a = this.actors; _i < _a.length; _i++) {
            var actor = _a[_i];
            fullMovie += "   " + actor.name + "\n";
        }
        fullMovie += "Nacionalidad:  " + this.nationality + "\n";
        fullMovie += "Director:  " + this.director.name + "\nGuionista:  " + this.writer.name + "\n";
        fullMovie += "Doblage original:  " + this.language + "\nPlataforma:  " + this.plataform + "\nPertenece al universo cinematografico marvel?:  " + pertenece + "\nPersonaje principal:  " + this.mainCharacterName + "\nProductor: " + this.producer + "\nDistribuidor: " + this.distributor + "\nGenero: " + this.genere;
        console.log(fullMovie);
    };
    return Movie;
}());
exports.Movie = Movie;
