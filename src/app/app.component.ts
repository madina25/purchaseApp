import { Component } from '@angular/core';
     
class Item{
    name: string;
    cost: number;
    amount: number;
    status: boolean;
     
    constructor(name: string, cost: number, amount: number, status: boolean) {
  
        this.name = name;
        this.cost = cost;
        this.amount = amount;
        this.status = status;
    }
}
 
@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html'
})
export class AppComponent { 

    items: Item[] = 
    [
        { name: "Item1", cost: 10, amount:2, status: false },
        { name: "Item2", cost: 10, amount:2, status: true },
        { name: "Item3", cost: 10, amount:2, status: true },
        { name: "Item4", cost: 10, amount:2, status: true }
    ];

    Price : number = 0;

    // Добавление элементов
    addItem(text: string, price: number, quantity: number, check: boolean): void {
         
        if(text==null || text==undefined)
            return;
        if(price==null || price==undefined)
            return;
        if(quantity==null || quantity==undefined)
            return;
        this.items.push(new Item(text, price, quantity, check));
    }

    // Удаление элементов
    removeItem(item: any, index: any){
        this.items.splice(index, 1)
    }

    // Подсчет суммы
    countPrice(){
     this.Price = 0;
      for(let p of this.items){
        if(p.status===true){
            this.Price += p.cost*p.amount
        }
      }
  }
}