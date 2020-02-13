import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';



@NgModule({
    imports: [
      CommonModule,
      MatToolbarModule,
      MatButtonModule,
      MatProgressBarModule,
      MatCardModule,
      MatSnackBarModule,
      MatDialogModule,
      MatInputModule,
      MatChipsModule,
      MatTableModule
    ],
    exports: [
      MatToolbarModule,
      MatButtonModule,
      MatProgressBarModule,
      MatCardModule,
      MatSnackBarModule,
      MatDialogModule,
      MatInputModule,
      MatChipsModule,
      MatTableModule
    ],
    declarations: []
  })
  export class MaterialModule { }