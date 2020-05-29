import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-occupation-create-update',
  templateUrl: './occupation-create-update.component.html',
  styleUrls: ['./occupation-create-update.component.scss']
})
export class OccupationCreateUpdateComponent implements OnInit {

  public constructor(
    private dialogRef: MatDialogRef<OccupationCreateUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private snackBar: MatSnackBar
  ) { }

  public ngOnInit(): void {
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
