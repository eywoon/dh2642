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
 
 class TopBarViewController{
 constructor(view, model) {
    view.returnButton.click(() => window.screen2())
  }
}
 
class TopBarView {
  constructor (container, model) {
     this.container=container;
     this.model=model;
     this.numberOfGuests = $(this.container).find("#numberOfGuests");
     this.returnButton = $(this.container).find("#return");
     model.addObserver(this);
     

  }
  update(model, changeDetails){
    if(changeDetails === 0) {
      $(this.container).find("#numberOfGuests").html(model.getNumberOfGuests())
      
    }
   
  } 
  // in lab 2, the Observer update method will come here
}