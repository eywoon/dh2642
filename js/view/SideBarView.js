class SideBarView {
    constructor (container, model) {
	    this.container=container;
	    this.model=model;
	    this.numberOfGuestsSelect = $(container).find("#numberOfGuestsSelect");
      this.expandButton = $(container).find("#expand-button");
      this.expand = $(container).find(".hide");
      this.cart = $(container).find("#cart-container");
      this.totalPriceContainer = $(container).find("#total-price-container");
      this.totalPriceTag = $(container).find("#total-price-tag");
      this.confirmButton = $(container).find("#confirm-button");
      this.sideBarMobilePrice = $(container).find(".sidebar-price");
      model.addObserver(this);
    }
    
    update(model, changeDetails){
      switch(changeDetails) {
        case 0:
        break;
        case 1:
          if(model.isMenuEmpty()) {
            this.confirmButton.addClass("blur");
            this.sideBarMobilePrice.html("");
          } else {
            this.confirmButton.removeClass("blur");
            this.sideBarMobilePrice.html("TODO"+ " SEK");
          }
          this.cart.find('.cart-data').remove()
          
        break;
      }
      if(changeDetails !== 2) { //do for both changes to guestnumber and changes to menu a lil hack
        
        
        let menu = model.getFullMenu();
        menu.forEach(function(dish) {
          if(dish !== null) {
            this.totalPriceContainer.before(this.cartItem(dish))
          }
        }.bind(this))
        var price = this.model.getTotalMenuPrice();
        this.totalPriceTag.html(price);
        
        
      } 
    }
    
    cartItem(dish) {
      var price = this.model.getDishPrice(dish.id)*this.model.getNumberOfGuests();
      return `
        <div class="cart-data-row cart-data">
          <p class="cart-cell">${dish.name}</p>
          <p class="cart-cell">${price}</p>
        </div>
      `;
    } 
  
    // in lab 2, the Observer update method will come here
}
 
