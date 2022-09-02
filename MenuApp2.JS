class Pizza {
    constructor(size, toppings) {
        this.size = size;
        this.toppings = toppings;
    }

        describe() {
            return `${this.size} toppings ${this.toppings}.`;
        }
    }

    class Toppings {
constructor(size) {
    this.size = size;
    this.toppings = [];  
}

addToppings(toppings) {
    if (toppings instanceof Toppings) {
        this.toppings.push(toppings);
    } else {
        throw new Error (`You can only add Toppings. Arguement is not a topping: ${topping}`);
            }
}   

describe()  {
    return `${this.size} has ${this.toppings.length} toppings on this pizza.`;
}
}

class Menu {
constructor (){
    this.size = [];
    this.selectedsize = null;
}

start() {
    let selection = this.showMainMenuOptions();

    while (selection != 0) {
        switch (selection) {
            case '1': 
            this.createPizza();
            break;
            case '2':
                this.viewPizza();
                break;
                case '3':
                    this.deletePizza();
                    break;
                    case '4':
                        this.displayPizza();
                        break;
                        default: 
                        selection = 0;
        }
        selection = this.showMainMenuOptions();
    }

    alert('Goodbye!');
}

showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create new pizza
    2) view pizza
    3) delete pizza
    4) display all pizzas
    `);
}

showSizeMenuOptions(pizzaInfo) {
return prompt (`
0) back
1) create toppings
2) delete toppings
---------------------------------
${pizzaInfo}
`);
}

displayPizza() {
    let sizeString = '';
    for (let i = 0; i < this.size.length; i++) {
        sizeString += i + ') ' + this.size[i].toppings + '\n';
    }
    alert(sizeString);
}

createPizza() {
    let size = prompt( 'Enter size of the pizza:');
    this.size.push(new Pizza(size));
}

viewPizza() {
    let index = prompt('Enter the number of of the pizza you with to view:');
    if (index > -1 && index < this.pizza.length) {
     this.selectedPizza = this.pizza[index];
     let description = 'Pizza Name: ' + this.selectedSize.name + '\n';
     
     for (let i = 0; i < this.selectedSize.toppings.length; i++) {
        description += i + ') ' + this.selectedSize.toppings[i].toppings 
        + ' - ' + this.selectedSize.toppings[i] + '\n';
}

let selection = this.showPizzaMenuOptions(description);
switch (selection) {
  case '1':
    this.createToppings();
    break;
    case '2':
     this.deleteToppings();     
}
}
}

deletePizza() {
    let index = prompt('Enter the number of the pizza you with to delete:');
    if (index > -1 && index < this.pizza.length) {
        this.pizza.splice(index, 1);
    }
}

createToppings() {
let size = prompt('Enter size of the pizza:');

let toppings = prompt('Enter toppings you would like on each pizza:');
this.selectedPizza.toppings.push(new Pizza(size, toppings));
}

deletToppings() {
   let index = prompt('Enter the number of the topping you with to delete:') ;
   if (index > -1 && index < this.selectedPizza.topppings.length) {
   this.selectedPizza.toppings.splice(index, 1);
   }
}
}

let menu = new Menu();
menu.start();
