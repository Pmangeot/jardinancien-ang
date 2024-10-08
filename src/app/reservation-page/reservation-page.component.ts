import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTableModule, MatSortModule, FormsModule],
  templateUrl: './reservation-page.component.html',
  styleUrl: './reservation-page.component.scss'
})
export class ReservationPageComponent {
  activeTab = 'availablePlants';
  items = [
    { id: 1, name: 'Tomate Coeur de Boeuf', description: 'lorem ipsum de ta mere batard ', stock: 10, quantity: 0 },
    { id: 2, name: 'Tomate Green Zebra', description: 'lorem ipsum de ta mere batard ', stock: 20, quantity: 0 },
    // add more items here
  ];

  sortItems(event: any) {
    // sort items logic here
  }

  goToItem(id: number) {
    // navigate to item page logic here
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
      item.stock++;
    }
  }

  increaseQuantity(item: any) {
    if (item.quantity < item.stock) {
      item.quantity++;
      item.stock--;
    }
  }

  updateQuantity(item: any) {
    if (item.quantity < 0) {
      item.quantity = 0;
    } else if (item.quantity > item.stock) {
      item.quantity = item.stock;
    }
  }

  navigateToAvailablePlants() {
    this.activeTab = 'availablePlants';
    // navigate to available plants page
  }

  navigateToMyReservation() {
    this.activeTab = 'myReservation';
    // navigate to my reservation page
  }

  navigateToMyAccount() {
    this.activeTab = 'myAccount';
    // navigate to my account page
  }
}
