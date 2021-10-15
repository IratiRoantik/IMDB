import { Imdb } from "./Imdb";
import { Movie } from '../classmovie/movie';
import { Professional } from "../classProfessional/Professional";

let profesional1:Professional = new Professional ("Irati",29,"female",80,1.80, "blond", "green", "asian", false, "vietnamese", 12, "actress" );
let profesional2:Professional = new Professional ("Dani",25,"male",75,1.60, "brown", "blue", "african", false, "senegalese", 0, "director" );
let profesional3:Professional = new Professional ("Juan",89,"male",70,1.50, "blond", "brown", "caucasian", true, "irish", 12, "actort" );
let profesional4:Professional = new Professional ("Pani",25,"male",75,1.60, "brown", "blue", "african", false, "senegalese", 0, "writer" );

let actores:Professional[] = [profesional1, profesional3];

let pelicula1:Movie = new Movie("Escape Room",2019,"Estadounidense","Terror/Suspense");
pelicula1.actors = actores;
pelicula1.director = profesional2;
pelicula1.writer = profesional4;
pelicula1.plataform = "Netflix";
pelicula1.mainCharacterName ="Zoey Davis";
pelicula1.language = "Inlgés";
pelicula1.producer = "Netflix";
pelicula1.distributor= "Netflix";


let pelicula2: Movie = new Movie("Harry Potter",1999,"Estadounidense","Magia");
pelicula2.actors = actores;
pelicula2.director = profesional2;
pelicula2.writer = profesional4;
pelicula2.plataform = "hbo";
pelicula2.mainCharacterName ="Harry Potter";
pelicula2.language = "Inlgés";
pelicula2.producer = "hbo";
pelicula2.distributor= "hbo";

let pelis:Movie[] = [ pelicula1, pelicula2]
let peliculas:Imdb = new Imdb (pelis);

peliculas.escribirEnJson("pruebaGeneracionFuncion.json");
let nuevaInstancia = peliculas.obtenerIntanciaIMDB("pruebaGeneracionFuncion.json");

console.log(nuevaInstancia);