class Topping {
    constructor(name, sauceType) {
        this.name = name;
        this.sauceType = sauceType;
    }

        describe() {
            return `${this.name} plays ${this.sauceType}.`;
        }
    }

    class Pizza {
constructor(name) {
    this.name = name;
    this.toppings = [];  
}

addTopping(topping) {
    if (topping instanceof Topping) {
        this.toppings.push(topping);
    } else {
        throw new Error (`You can only add toppings: ${toppings}`);
            }
}   

describe()  {
    return `${this.name} has ${this.toppings.length} on the pizza.`;
}
}

class Menu {
constructor (){
    this.pizzas = [];
    this.selectedPizza = null;
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
                        this.displayPizzas();
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

showPizzaMenuOptions(pizzaInfo) {
return prompt (`
0) back
1) create topping
2) delete topping
---------------------------------
${pizzaInfo}
`);
}

displayPizzas() {
    let pizzaString = '';
    for (let i = 0; i < this.pizzas.length; i++) {
        pizzaString += i + ') ' + this.pizzas[i].name + '\n';
    }
    alert(pizzaString);
}

createPizza() {
    let name = prompt( 'Enter name for new pizza:');
    this.pizzas.push(new Pizza(name));
}

viewPizza() {
    let index = prompt('Enter the index of the pizza you with to view:');
    if (index > -1 && index < this.pizzas.length) {
     this.selectedPizza = this.pizzas[index];
     let description = 'Pizza Name: ' + this.selectedPizza.name + '\n';
     
     for (let i = 0; i < this.selectedPizza.toppings.length; i++) {
        description += i + ') ' + this.selectedPizza.toppings[i].name 
        + ' - ' + this.selectedPizza.toppings[i].sauceType + '\n';
}

let selection = this.showPizzaMenuOptions(description);
switch (selection) {
  case '1':
    this.createTopping();
    break;
    case '2':
     this.deleteTopping();     
}
}
}

deletePizza() {
    let index = prompt('Enter the index of the pizza you with to delete:');
    if (index > -1 && index < this.pizzas.length) {
        this.pizzas.splice(index, 1);
    }
}

createTopping() {
let name = prompt('Enter name for new topping:');
let sauceType = prompt('Enter sauceType for new topping:');
this.selectedPizza.toppings.push(new Topping(name, sauceType));
}

deleteTopping() {
   let index = prompt('Enter the index of the topping you with to delete:') ;
   if (index > -1 && index < this.selectedPizza.toppings.length) {
   this.selectedPizza.toppings.splice(index, 1);
   }
}
}

let menu = new Menu();
menu.start();
