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
class DishSearchView {
    constructor (container, model) {
	     this.container=container;
	     this.model=model;
       var menu = model.getAllDishes()
       var dishContainer = $(container).find("#dish-item-container")
       
       menu.forEach(function(dish) {
         dishContainer.append('<div id="dish-' + dish.id + '"><image src="images/' + dish.image + '"> </image><p>'+ dish.name +'</p></div>')
       })
      
      
  }
}
 
