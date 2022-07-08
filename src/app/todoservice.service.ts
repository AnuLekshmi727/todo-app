import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  
  constructor(private http:HttpClient) { }
   vTodo=()=>{
    return this.http.get("http://jsonplaceholder.typicode.com/todos")
   }

}
