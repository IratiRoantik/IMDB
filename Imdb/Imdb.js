"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require("file-system");
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.Movie = peliculas;
    }
    Imdb.prototype.escribirEnJson = function (nombreDelFichero) {
        var objetoAJson = JSON.stringify(this.Movie);
        fs.writeFileSync(nombreDelFichero, objetoAJson);
    };
    Imdb.prototype.obtenerIntanciaIMDB = function (nombreDelFichero) {
        var datos = fs.readFileSync(nombreDelFichero, { encoding: "utf8" });
        var objectIMDB = JSON.parse(datos);
        return objectIMDB;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
