import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styles: []
})
export class ModificarComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<ModificarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.forma = fb.group({}); 
    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardarCambios() {
    console.log(this.forma);
    
    this.dialogRef.close(this.forma.value);
  }

}
