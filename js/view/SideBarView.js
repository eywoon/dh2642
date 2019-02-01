/** ExampleView Object constructor
 * 
 * This object represents one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view class like this for every view in your UI.
 * 
 * @param {Object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
 
 class SideBarViewController{
 constructor(view, model) {
    view.expandButton.click(() => {
      view.expand.toggleClass("d-sm-block").toggleClass("d-none");
      if(view.expand.hasClass("d-sm-block")) {
        console.log("hide");
        view.sideBarMobilePrice.show();
        console.log(view.sideBarMobilePrice);
      } else {
        console.log("show");
        console.log(view.sideBarMobilePrice);
        view.sideBarMobilePrice.hide();
      }
    })
    
    view.numberOfGuestsSelect.change(() => model.setNumberOfGuests(Number(view.numberOfGuestsSelect.find(":selected").text())))
    view.confirmButton.click(()=> {
      if(!model.isMenuEmpty()) {
        window.screen5()
      }  
    })
  }
}
 
 
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
      if(changeDetails !== 2) { //do for both changes to guestnumber and changes to menu a lil hack
          console.log("update");
        if(model.isMenuEmpty()) {
          this.confirmButton.addClass("blur");
          this.sideBarMobilePrice.html("");
        } else {
          this.confirmButton.removeClass("blur");
          this.sideBarMobilePrice.html(model.getTotalMenuPrice()+ " SEK");
        }
        this.cart.find('.cart-data').remove()
        let menu = model.getFullMenu();
        let self = this;
        menu.forEach(function(dish) {
          if(dish !== null) {
            self.totalPriceContainer.before(self.cartItem(dish))
          }
        })
        var price = this.model.getTotalMenuPrice();
        this.totalPriceTag.html(price);
        
        
      } 
    }
    
    cartItem(dish) {
      var price = this.model.getDishPrice(dish.id)*this.model.getNumberOfGuests();
      var html = `
        <div class="cart-data-row cart-data">
          <p class="cart-cell">`+dish.name +`</p>
          <p class="cart-cell">`+ price +`</p>
        </div>
      `;
      return html;
    } 
  
    // in lab 2, the Observer update method will come here
}
 
