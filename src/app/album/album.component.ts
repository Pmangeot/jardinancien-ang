import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [MatGridListModule, CommonModule, MatDialogModule],
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  photos = [
    { src: '../../assets/album/1674766806683.jpg', cols: 1, rows: 1 },
    { src: "../../assets/album/1674766806697.jpg", cols: 1, rows: 1 },
    { src: '../../assets/album/1674766806707.jpg', cols: 1, rows: 1 },
    { src: '../../assets/album/1674766806718.jpg', cols: 1, rows: 1 },
    { src: '../../assets/album/1674766806728.jpg', cols: 1, rows: 1 },
    { src: '../../assets/album/1674766806738.jpg', cols: 1, rows: 1 },
    { src: '../../assets/album/1674766806749.jpg', cols: 1, rows: 1 },
    { src: '../../assets/album/1674766832237.jpg', cols: 1, rows: 1 },
    { src: '../../assets/album/1674766832244.jpg', cols: 1, rows: 1 },
    { src: '../../assets/album/1674766832252.jpg', cols: 1, rows: 1 },
    { src: '../../assets/album/1674766832259.jpg', cols: 1, rows: 1 },
    { src: '../../assets/album/1674766832269.jpg', cols: 1, rows: 1 },
    { src: '../../assets/album/1674766832276.jpg', cols: 1, rows: 1 },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(photoSrc: string) {
    this.dialog.open(DialogContentComponent, {
      data: { photoSrc },
      panelClass: 'full-screen-modal'
    });
  }
}
