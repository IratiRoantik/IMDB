import { Professional } from "../../../professional";

export class Movie{
    public title:string;
    public realeseYear:number;
    public actors:Professional[]
    public nationality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genere:string;

    constructor(title:string, realeseYear:number, nationality:string, genere:string){
        this.title = title;
        this.realeseYear = realeseYear;
        this.nationality = nationality;
        this.genere = genere;
    }
    
    public printMovie():void{
        let fullMovie:string = ``;
        let pertenece:string = 'No';
        if(this.isMCU){
            pertenece = "Si"
        }
        fullMovie += `Titulo: ${this.title} \n
        Año de estreno: ${this.realeseYear}\n
        Actores que participan en la pelicula:` ;

        for(let actor of this.actors){
            fullMovie +=`${actor.name}\n` 
         }

        fullMovie += `Nacionalidad:  ${this.nationality}\n`;
        fullMovie += `Director:  ${this.director}\n
        Guionista:  ${this.writer}\n`;
        fullMovie+=`Doblage original:  ${this.language}\n
        Plataforma:  ${this.plataform}\n
        Pertenece al universo cinematografico marvel?:  ${pertenece}\n
        Personaje principal:  ${this.mainCharacterName}\n
        Productor: ${this.producer}\n
        Distribuidor: ${this.distributor}\n
        Genero: ${this.genere}`;

    }
}