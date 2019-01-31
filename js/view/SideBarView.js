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
    view.expandButton.click(() => view.expand.toggleClass("d-sm-block").toggleClass("d-none").toggleClass("overlay"));
    view.numberOfGuestsSelect.change(() => model.setNumberOfGuests(Number($(view.container).find(":selected").text())))
    
  }
}
 
 
class SideBarView {
    constructor (container, model) {
	    this.container=container;
	    this.model=model;
	    this.numberOfGuestsSelect = $(container).find("#numberOfGuestsSelect");
      this.expandButton = $(container).find("#expand-button");
      this.expand = $(".hide");
    }
  
    // in lab 2, the Observer update method will come here
}
 
