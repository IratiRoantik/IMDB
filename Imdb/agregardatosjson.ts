let readLineSync = require('readline-sync')
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


// Petición de datos
let title:string = readLineSync.question('Cual es el titulo de la pelicula? ');
let realeseYear:number = parseInt(readLineSync.question('En que año se estreno la pelicula? '));
let seguir = false
let actoresIntroducidos:Professional[]
do{
    let nombrePro:string = readLineSync.question('Cual es el nombre del actor');
    let age:number = parseInt(readLineSync.question('Cuantos años tiene el actor'));
    let genere:boolean = readLineSync.question('Cual es el genero del actor');
    let weight:number = parseInt(readLineSync.question('Cual es el peso del actor'));
    let height:number = parseInt(readLineSync.question('Cual es la altura del actor'));
    let hairColor:string = readLineSync.question('Cual es el color de pelo del actor');
    let eyeColor:string = readLineSync.question('Cual es el color de ojos del actor');
    let race:string = readLineSync.question('Cual es la raza del actor');
    let isRetired:boolean = readLineSync.question('Esta retirado este actor?')
    let nacionalidad:string = readLineSync.question('Cual es la nacionalidad del actor');
    let oscarsNumber:number= parseInt(readLineSync.question('Cuantos oscars tiene este actor'));
    let actor = new Professional(nombrePro,age,genere,weight,height,hairColor,eyeColor,race,isRetired,nacionalidad,oscarsNumber,"Actor")
    actoresIntroducidos.push(actor)
    seguir= readLineSync.question('Quiere añadir otro actor? (True/False)');
}
while(seguir == true)
let nacionality : string =  readLineSync.question('En que pais se hizo la pelicula? ');

let nombrePro:string = readLineSync.question('Cual es el nombre del director');
let age:number = parseInt(readLineSync.question('Cuantos años tiene el directo'));
let genre:boolean = readLineSync.question('Cual es el genero del directo');
let weight:number = parseInt(readLineSync.question('Cual es el peso del director'));
let height:number = parseInt(readLineSync.question('Cual es la altura del director'));
let hairColor:string = readLineSync.question('Cual es el color de pelo del director');
let eyeColor:string = readLineSync.question('Cual es el color de ojos del director');
let race:string = readLineSync.question('Cual es la raza del director');
let isRetired:boolean = readLineSync.question('Esta retirado este director?')
let nacionalidad:string = readLineSync.question('Cual es la nacionalidad del director');
let oscarsNumber:number= parseInt(readLineSync.question('Cuantos oscars tiene este director'));
let director :Professional = new Professional(nombrePro,age,genre,weight,height,hairColor,eyeColor,race,isRetired,nacionalidad,oscarsNumber,"Director");

nombrePro = readLineSync.question('Cual es el nombre del escritor');
age = parseInt(readLineSync.question('Cuantos años tiene el escritor'));
genre = readLineSync.question('Cual es el genero del escritor');
weight = parseInt(readLineSync.question('Cual es el peso del escritor'));
height = parseInt(readLineSync.question('Cual es la altura del escritor'));
hairColor = readLineSync.question('Cual es el color de pelo del escritor');
eyeColor= readLineSync.question('Cual es el color de ojos del escritor');
race= readLineSync.question('Cual es la raza del escritor');
isRetired = readLineSync.question('Esta retirado este escritor?')
nacionalidad = readLineSync.question('Cual es la nacionalidad del escritor');
oscarsNumber= parseInt(readLineSync.question('Cuantos oscars tiene este escritor'));
let escritor :Professional = new Professional(nombrePro,age,genre,weight,height,hairColor,eyeColor,race,isRetired,nacionalidad,oscarsNumber,"Escritor");

let lenguage : string =  readLineSync.question('En que idioma se hizo la pelicula? ');
let platform : string =  readLineSync.question('Para que plataforma se hizo la pelicula? ');
let ismcu : boolean =  readLineSync.question('Pertenece al universo de Marvel? ');
let nombrePersonajePrincipal : string =  readLineSync.question('Cuan es el nombre del personaje principal de la pelicula? ');
let producer : string =  readLineSync.question('Quien es el productor de la pelicula? ');
let distributor : string =  readLineSync.question('Cual es el distribuidor de la pelicula? ');
let genere : string =  readLineSync.question('Cual es el genero de la pelicula? ');

let nuevaPeli:Movie = new Movie(title,realeseYear,nacionality,genere);
nuevaPeli.plataform = platform;
nuevaPeli.mainCharacterName =nombrePersonajePrincipal;
nuevaPeli.language = lenguage;
nuevaPeli.producer = producer;
nuevaPeli.distributor= distributor;
nuevaPeli.isMCU = ismcu;
nuevaPeli.actors = actoresIntroducidos;
nuevaPeli.director = director;
nuevaPeli.writer = escritor;

peliculas.Movie.push(nuevaPeli);
peliculas.escribirEnJson("imdbBBDD.json")
