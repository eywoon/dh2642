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

class DishSearchViewController {
  constructor(view, model) {
    
  }
}



class DishSearchView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    var menu = model.getAllDishes()
    var dishContainer = $(container).find("#dish-item-container")
    var self = this;
    menu.forEach(function(dish) {
      let itemDetail = $(self.itemDetailView(dish));
      itemDetail.click(function() {
        self.model.setCurrentSelection(dish.id);
        window.screen3()
      })
      dishContainer.append(itemDetail);
    })


  }
  itemDetailView(dish) {
    var html = `
      <div id='dish-` + dish.id + `'>
        <image src='images/` + dish.image + `'></image>
        <p>` + dish.name + `</p>
      </div>
    `;
    return html;
  }

}