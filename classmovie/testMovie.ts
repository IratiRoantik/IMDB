import { Professional } from '../../../professional';
import { Movie } from './movie';

let profesional1:Professional = new Professional ("Irati",29,"female",80,1.80, "blond", "green", "asian", false, "vietnamese", 12, "actress" );
let profesional2:Professional = new Professional ("Dani",25,"male",75,1.60, "brown", "blue", "african", false, "senegalese", 0, "director" );
let profesional3:Professional = new Professional ("Juan",89,"male",70,1.50, "blond", "brown", "caucasian", true, "irish", 12, "actort" );
let profesional4:Professional = new Professional ("Pani",25,"male",75,1.60, "brown", "blue", "african", false, "senegalese", 0, "writer" );

let actores:Professional[] = [profesional1, profesional3];

let pelicula:Movie = new Movie("Escape Room",2019,"Estadounidense","Terror/Suspense");
pelicula.actors = actores;
pelicula.director = profesional2;
pelicula.writer = profesional4;
pelicula.plataform = "Netflix";
pelicula.mainCharacterName ="Zoey Davis";
pelicula.language = "Inlgés";
pelicula.producer = "Netflix";
pelicula.distributor= "Netflix";

pelicula.printMovie();


