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
//
//  class SideBarViewController{
//  constructor(view, model, gsc) {
//     view.expandButton.click(() => {
//       view.expand.toggleClass("d-sm-block").toggleClass("d-none");
//       if(view.expand.hasClass("d-sm-block")) {
//         view.sideBarMobilePrice.show();
//       } else {
//         view.sideBarMobilePrice.hide();
//       }
//     })
//
//     view.numberOfGuestsSelect.change(() => model.setNumberOfGuests(Number(view.numberOfGuestsSelect.find(":selected").text())))
//     view.confirmButton.click(()=> {
//       if(!model.isMenuEmpty()) {
//         gsc.screen5()
//       }
//     })
//   }
// }
 
 
class SideBarView {
    constructor (container, model) {
        this.container=container;
	    this.model=model;
	    this.name = "LOL";
	    //this.numberOfGuestsSelect = $(container).find("#numberOfGuestsSelect");
        this.numberOfGuestsSelect = document.getElementById('numberOfGuestsSelect');
       // this.expandButton = $(container).find("#expand-button");
        this.expandButton = document.getElementById('#expand-button');
       // this.expand = $(container).find(".hide");
        this.expand = document.getElementsByClassName('hide');
        //this.cart = $(container).find("#cart-container");
        this.cart = document.getElementsByClassName('cart-container');
        //this.totalPriceContainer = $(container).find("#total-price-container");
        this.totalPriceContainer = document.getElementById('total-price-container');

       // this.totalPriceTag = $(contasiner).find("#total-price-tag");
        this.totalPriceTag = document.getElementById('total-price-tag');
       // this.confirmButton = $(container).find("#confirm-button");
        this.confirmButotn = document.getElementById('confirm-button');
        //this.sideBarMobilePrice = $(container).find(".sidebar-price");
        this.sideBarMobilePrice = document.getElementsByClassName('sidebar-price');
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
          <p class="cart-cell">`+dish.name +`</p>
          <p class="cart-cell">`+ price +`</p>
        </div>
      `;
    } 
  
    // in lab 2, the Observer update method will come here
}
 
