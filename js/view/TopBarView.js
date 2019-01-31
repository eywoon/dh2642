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
class TopBarView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.numberOfGuests = container.querySelector("#numberOfGuests");

    /**
     * When we want references to some view elements to be available from outside of view, we 
     * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it 
     * will be important for assigning listeners to these buttons, because the listeners
     * should not be assigned in the view, but rather in controller.
     * 
     * We can then, in some other code, use exampleView.plusButton to reference the 
     * this button and do something with it (see Lab 2).
     * 
     */
    this.plusButton = container.querySelector("#plusGuest");
    this.minusButton = container.querySelector("#minusGuest");

    /**
     * Here we use numberOfGuests that is a reference to <span>
     * in our view to dynamically set it's value to "Hello World".
     */
    this.numberOfGuests.innerHTML = model.getNumberOfGuests();
  }
  // in lab 2, the Observer update method will come here
}