import { Movie } from '../classmovie/movie';
import * as fs from "file-system";

export class Imdb{
    public Movie : Movie[]

    constructor(peliculas : Movie [] ){
      this.Movie  = peliculas
    }
    escribirEnJson(nombreDelFichero:string):void{
      let objetoAJson = JSON.stringify(this.Movie)
      fs.writeFileSync(nombreDelFichero, objetoAJson);
    }
    obtenerIntanciaIMDB(nombreDelFichero:string):Imdb{
      let datos = fs.readFileSync(nombreDelFichero, {encoding:"utf8"})
      let objectIMDB = JSON.parse(datos);
      return objectIMDB;
    }
}
 