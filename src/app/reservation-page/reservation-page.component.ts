import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { ReservationService } from '../reservation-service.service';


@Component({
  selector: 'app-reservation-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTableModule, MatSortModule, FormsModule],
  templateUrl: './reservation-page.component.html',
  styleUrl: './reservation-page.component.scss'
})
export class ReservationPageComponent {
  activeTab = 'availablePlants';
  originalItems = [
    { id: 1, name: 'Tomate Coeur de Boeuf', description: 'Tomate charnue au goût prononcé, parfaite pour les salades et la cuisine estivale.', stock: 10, quantity: 0 },
    { id: 2, name: 'Tomate Green Zebra', description: 'Tomate verte rayée de jaune, légèrement acidulée, idéale pour les salades colorées.', stock: 20, quantity: 0 },
    { id: 3, name: 'Tomate Ananas', description: 'Variété juteuse et sucrée avec une chair dense, d’un jaune orangé qui rappelle l’ananas.', stock: 15, quantity: 0 },
    { id: 4, name: 'Courgette Verte', description: 'Légume polyvalent, savoureux sauté, grillé ou en ratatouille.', stock: 25, quantity: 0 },
    { id: 5, name: 'Courgette Jaune', description: 'Courgette douce et tendre, parfaite pour ajouter de la couleur dans vos plats.', stock: 18, quantity: 0 },
    { id: 6, name: 'Aubergine Violette', description: 'Aubergine à la peau brillante et à la chair fondante, idéale pour les plats méditerranéens.', stock: 30, quantity: 0 },
    { id: 7, name: 'Concombre Noa', description: 'Variété de concombre sans amertume, parfait pour les salades rafraîchissantes.', stock: 22, quantity: 0 },
    { id: 8, name: 'Concombre Vert Long', description: 'Long concombre croquant, idéal pour les salades et les sandwichs.', stock: 28, quantity: 0 },
    { id: 9, name: 'Carotte Nantes', description: 'Carotte sucrée et croquante, excellente en crudités ou cuite.', stock: 40, quantity: 0 },
    { id: 10, name: 'Carotte Jaune', description: 'Carotte douce et tendre, ajoutant une touche de couleur dans les plats.', stock: 35, quantity: 0 },
  ];
  items = [...this.originalItems];
  validateButtonEnabled = false;

  constructor(private reservationService: ReservationService) {
    const storedItems = this.reservationService.getItems();
    if (storedItems.length > 0) {
      this.items = storedItems;
      // Update originalItems with item.quantity values from items
      this.originalItems.forEach(item => {
        const storedItem = this.items.find(storedItem => storedItem.id === item.id);
        if (storedItem) {
          item.quantity = storedItem.quantity;
        }
      });
    } else {
      this.items = [...this.originalItems];
    }
  }

  filteredItems() {
    return this.items.filter(item => item.quantity > 0);
  }

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
    if (item.stock > 0) {
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
    this.items = [...this.originalItems];
    this.reservationService.setItems(this.items);
    this.validateButtonEnabled = false;

    // navigate to available plants page
  }

  navigateToMyReservation() {
    this.activeTab = 'myReservation';
    this.items = this.originalItems.filter(item => item.quantity > 0);
    this.reservationService.setItems(this.items);
    this.validateButtonEnabled = true;
    // navigate to my reservation page
  }

  navigateToMyAccount() {
    this.activeTab = 'myAccount';
    // navigate to my account page
  }
}
