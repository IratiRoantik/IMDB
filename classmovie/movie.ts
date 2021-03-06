import { Professional } from '../classProfessional/Professional';

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
        fullMovie += `Titulo: ${this.title} \nAño de estreno: ${this.realeseYear}\nActores que participan en la pelicula: \n` ;

        for(let actor of this.actors){
            fullMovie +=`   ${actor.name}\n` 
         }

        fullMovie += `Nacionalidad:  ${this.nationality}\n`;
        fullMovie += `Director:  ${this.director.name}\nGuionista:  ${this.writer.name}\n`;
        fullMovie+=`Doblage original:  ${this.language}\nPlataforma:  ${this.plataform}\nPertenece al universo cinematografico marvel?:  ${pertenece}\nPersonaje principal:  ${this.mainCharacterName}\nProductor: ${this.producer}\nDistribuidor: ${this.distributor}\nGenero: ${this.genere}`;

        console.log(fullMovie);
    }
}