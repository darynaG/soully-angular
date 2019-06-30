import { Injectable } from '@angular/core';
import {HttpClient} from   '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  deleteUser(userId){
    return this.http.delete('https://jsonplaceholder.typicode.com/users' + '/' + userId);
  }
  
  deletePost(postId){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts' + '/' + postId);
  }
  getUser(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+ userId);
  }
  
  getPosts(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }


}
