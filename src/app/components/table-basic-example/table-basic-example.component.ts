import { Component, OnInit } from '@angular/core';
import { VectorServicesService } from 'src/app/services/vector-services.service';
import { TareaModel } from 'src/app/models/tarea.model';
import Swal from 'sweetalert2'
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { AgregarComponent } from '../agregar/agregar.component';
import { ModificarComponent } from '../modificar/modificar.component';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-table-basic-example',
  templateUrl: './table-basic-example.component.html',
  styleUrls: ['./table-basic-example.component.css']
})
export class TableBasicExampleComponent implements OnInit {  
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'estado', 'herramientas'];
  dataSource:TareaModel[] = [];

  ngOnInit(){ 
    this.listaTareas();   
  }

  constructor(private vectorservices:VectorServicesService,
             public snackBar: MatSnackBar,
             public dialog: MatDialog ) {
   }

   eliminarTareas() {
     Swal.fire({
       title:'¿Estas seguro?',
       text:'¿Desea eliminar todas las tareas finalizadas?',
       icon:'question',
       showConfirmButton:true,
       showCancelButton:true
     }).then(resp=>{
       if(resp.value){
         this.vectorservices.eliminarTareas()
           .subscribe(() => { return; },
             err=>{
              this.snackBar.open('No se pudo eliminar las tareas', 'Cerrar', { duration: 3000, panelClass: ['snackColorRojo'] });
            });
         this.listaTareas();
       }else{return;}       
     })
   }


   eliminarTarea(id:string) {
     this.vectorservices.eliminarTarea(id)
       .subscribe(() => {
        this.snackBar.open('Tarea eliminada', 'Cerrar', { duration: 3000 });
        this.listaTareas();
       }, err => {
        this.snackBar.open('La tarea no pudo ser eliminada', 'Cerrar', { duration: 3000, panelClass: ['snackColorRojo'] });
       })
  }  

  terminarTarea(i:string) {
    const dialogRef = this.dialog.open( ModificarComponent, {
      width: '250px',
      data: { done:null }
    });

    dialogRef.afterClosed().subscribe(res => {
      if(!res) {
        return;
      }

      this.vectorservices.actualizarTarea(i)
        .subscribe(() => {
          this.snackBar.open('Tarea actualizada', 'Cerrar', { duration: 3000 });
          this.listaTareas();
        }, err => {
          this.snackBar.open('La tarea no pudo ser actualizada', 'Cerrar', { duration: 3000, panelClass: ['snackColorRojo'] });
        });
    });
  }

  agregarTarea() {
    const dialogRef = this.dialog.open( AgregarComponent, {
      width: '250px',
      data: { name: "", desc: "" }
    });

    dialogRef.afterClosed().subscribe(result => {

      if ( !result ) {
        return;
      }

      const tarea = {
        name:result.name,
        description:result.desc,
        done:false
      }

      this.vectorservices.nuevaTarea(<TareaModel>tarea).subscribe(() => {
        this.snackBar.open('Tarea agregada', 'Cerrar', { duration: 3000 });
        this.listaTareas();
      }, err => {
        this.snackBar.open('La tarea no pudo ser creada', 'Cerrar', { duration: 3000, panelClass: ['snackColorRojo'] });
      });

    });
  }

  listaTareas() {
    this.vectorservices.getTareas()
      .subscribe(resp => {        
          return this.dataSource = resp;                 
        }, err => {
          this.snackBar.open('Error al cargar datos', 'Cerrar', { panelClass: ['snackColorRojo'] });
        }     
      );    
  }

}
