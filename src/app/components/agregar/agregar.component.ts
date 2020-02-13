import { Component, OnInit, Inject } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { ActivatedRoute} from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  tarea = new TareaModel();
  forma: FormGroup;

  constructor(private route:ActivatedRoute, 
              public fb: FormBuilder,
              public dialogRef: MatDialogRef<AgregarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.forma=fb.group({
      'name': [data.name || '', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      'desc': [data.description || '', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]]
    });

   }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardarTarea(){
    console.log(this.forma);
    
    if(this.forma.status=='VALID'){
      this.dialogRef.close(this.forma.value);     
    }
    return;
  }

}
