import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
movie: Movie = {
  name: null,
  description: null,
  genre: null,
  year: null,
  duration: null
};

id: any;
editing: boolean = false;
movies: Movie[];


  constructor(private movieService: MoviesService,private activa: ActivatedRoute) {

        this.id = this.activa.snapshot.params['id'];
        console.log(this.id);

        if(this.id){
            this.editing = true;
            this.movieService.get().subscribe((data: Movie[])=> {
                this.movies = data;
                console.log(data);
                this.movie = this.movies.find((m)=>{return m.id == this.id});
                console.log(this.movie)
            }, (error)=>{
                console.log(error);
            })
        }else{
            this.editing = false;
        }
   }

  ngOnInit() {
  }

  saveMovie(){
    if(this.editing){

      this.movieService.edit(this.movie).subscribe((data) => {
        alert('Pelicula o Serie Actualizada');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un Error');
      })


    }else{

      this.movieService.save(this.movie).subscribe((data) => {
        alert('Pelicula o Serie Guardada');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un Error');
      })

    }
  }

}
