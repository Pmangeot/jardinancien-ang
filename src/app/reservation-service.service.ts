import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private items: any[] = [];

  setItems(items: any[]) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
}
