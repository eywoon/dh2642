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
  constructor(view, model, gsc) {
    this.view = view;
    this.model = model;
    this.gsc = gsc;
    let parent = this;
    view.dishContainer.on('click', '.dish-image, dish-name', function(evt){
      this.model.setCurrentSelection($(evt.target).parent().attr('id').split("-")[1]);
      this.gsc.screen3()
    }.bind(this));
    view.typeSelect.change(view.renderDishes.bind(view));
    view.searchButton.click(view.renderDishes.bind(view));
    view.searchInput.keypress(function(e) {
      if (e.which == 13) {
        this.view.searchButton.click();
      }
    }.bind(this));

    view.typeSelect.change();
  }

  
}



class DishSearchView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.typeSelect = $(container).find("#select-type")
    this.dishContainer = $(container).find("#dish-item-container")
    this.searchButton = $(container).find("#search-button")
    this.searchInput = $(container).find("#search-input")
    let types = this.model.getTypes();
    this.typeSelect.append('<option value="">All</option>')

    types.forEach(function(type) {
      let string = type.charAt(0).toUpperCase() + type.slice(1);
      this.typeSelect.append('<option value="' + type + '">' + string + '</option> ')
    }.bind(this));

  }

  itemDetailView(dish) {
    let html = `
      <div class="col-xs-12 col-sm-4 col-md-3 dish-item" id='dish-${dish.id}'>
        <img class="dish-image" src='images/${dish.image}'></img>
        <p class="dish-name">${dish.name}</p>
      </div>
    `;
    return html;
  }
  
  renderDishes() {
    let option = this.typeSelect.val();
    let filter = this.searchInput.val();
    let dishes = this.model.getAllDishes(option, filter);
    this.dishContainer.empty();
    dishes.forEach(function(dish) {
      let itemDetail = $(this.itemDetailView(dish));
      this.dishContainer.append(itemDetail);
    }.bind(this))
  }

}