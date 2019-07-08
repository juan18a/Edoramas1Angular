import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  movies: Movie[];

  constructor(private movieService: MoviesService) {

      this.getMovies();

   }


   getMovies(){

    this.movieService.get().subscribe((data: Movie[]) => {
      this.movies = data;
  }, (error) => {
      console.log(error);
      alert('ha ocurrido un error');

  });

   }

   delete(id){

    if(confirm('Estas seguro que quieres borrar esta pelicula o serie?')){

      this.movieService.delete(id).subscribe((data: Movie[]) => {
        console.log(data);
        alert('eliminado con exito');
        this.getMovies();
    }, (error) => {
        console.log(error);
        alert('ha ocurrido un error');
  
    });


    }
   



   }


  ngOnInit() {
  }

}
