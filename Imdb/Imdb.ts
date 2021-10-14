import { Movie } from '../classmovie/movie';

class Imdb{
    public Movie : Movie[]

    constructor(peliculas : Movie [] ){
      this.Movie  = peliculas
    }

}
 export{Imdb}