class Professional{
    public name :string;
    public age: number;
    public genre: boolean;
    public  weight: number;
    public height : number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor (name, age, genre, weigth, height, hairColor,
     eyeColor, race, isRetired, nationality, oscarNumber, 
     profession){
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weigth;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor= eyeColor;
        this.race = race;
        this.isRetired= isRetired;
        this.nationality=nationality;
        this.oscarsNumber=oscarNumber;
        this.profession=profession;
    }
 print (Professional){
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
      
 }

}


export {Professional}