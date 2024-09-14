import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  template: `
    <div class="modal-content">
      <img [src]="data.photoSrc" alt="Photo">
    </div>
  `,
  styles: [`
    .modal-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    img {
      max-width: 80vw;
      max-height: 80vh;
    }
  `]
})
export class DialogContentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { photoSrc: string }) {}

}
