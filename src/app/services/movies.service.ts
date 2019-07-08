import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //API_ENDPOINT = 'http://movies.com.ve/api';

   API_ENDPOINT = 'https://edoramas1.herokuapp.com/api';

   
  constructor(private httpClient: HttpClient) { }

  

  get(){
      const headers = new HttpHeaders({'content-type':'aplication/json'});
    
       return this.httpClient.get(this.API_ENDPOINT+'/movies' ,{headers: headers});
  }

  save(movie: Movie){
    const headers = new HttpHeaders({'content-type':'aplication/json'});
  
    return this.httpClient.post(this.API_ENDPOINT + '/movies' , movie, {headers: headers});
  }

  edit(movie){
    const headers = new HttpHeaders({'content-type':'aplication/json'});
  
    return this.httpClient.put(this.API_ENDPOINT + '/movies' + '/'+ movie.id , movie  ,  {headers: headers});
  }

  delete(id){
  
      return this.httpClient.delete(this.API_ENDPOINT + '/movies/'+ id );
  }


}
