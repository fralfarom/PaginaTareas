import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TareaModel } from 'src/app/models/tarea.model';
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class VectorServicesService {


  url:string = 'https://vector-capacitaciones.appspot.com/api/v11';

  constructor(private http:HttpClient) { }


  getTareas() {    
    return this.http.get(`${this.url}/task`)
      .pipe(
        map(resp => {
          return this.arregloTareas(resp);
        })
      );
  }

  getTarea(id:string) {
    return this.http.get(`${this.url}/task/${id}`);
  }

  eliminarTareas() {
    return this.http.delete(`${this.url}/task`);
  }

  nuevaTarea(tarea:TareaModel) {
    return this.http.post(`${this.url}/task`,tarea);
  }

  actualizarTarea(id:string) {
    return this.http.put(`${this.url}/task/${id}`,null);
  }

  eliminarTarea(id:string) {
    return this.http.delete(`${this.url}/task/${id}`);
  }

  private arregloTareas(arreglo:Object) {
    const tareas:TareaModel[] = [];

    Object.keys(arreglo).forEach(key => {
      const tarea:TareaModel=arreglo[key];
      tareas.push(tarea);      
    });
    return tareas;
  }
}
