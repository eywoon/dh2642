
class DinnerOverViewController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    view.printButton.click(() => {
      window.screen6()
    })
  }
}

class DinnerOverView {
    constructor (container, model) {
	     this.container=container;
	     this.model=model;
       this.printButton = $(container).find("#print-button");
       this.menuContainer = $(container).find("#selected-menu")
       this.totalPriceTag = $(container).find("#totalPriceTag");
       model.addObserver(this);

    }
    update(model, changeDetails){
      if(changeDetails !== 2) {
        this.menuContainer.empty();
        let dishes = model.getFullMenu();
        dishes.forEach(function(dish) {
          if(dish !== null) {
              this.menuContainer.append(this.itemDishView(dish));
          }
        }.bind(this))
        let numberOfSelections = model.getNumberOfSelections();
        this.menuContainer.children().first().addClass('offset-sm-' + (3 + (3-numberOfSelections)*3))
        this.totalPriceTag.html(model.getTotalMenuPrice());
      }
    }
    itemDishView(dish, first) {
      let offset = "";
      let price = this.model.getDishPrice(dish.id)*this.model.getNumberOfGuests();
      let html = `
      <div class="col-xs-12 col-sm-3 dish-item">
        <image src='images/`+dish.image+`'></image>
        <p class="dish-name">`+dish.name+`</p>
        <p class="dish-price">`+price+`</p>
      </div>
      `;
      return html;
    }
    
    // in lab 2, the Observer update method will come here
}
 
