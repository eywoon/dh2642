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
    let dishes = [];
    let dishesPromise = this.model.getAllDishes(option, filter).then(function(dishes){
      this.dishes = dishes;
      console.log(dishes);
      console.log(dishes[0].title);
    }.bind(this));
  //  let dishes = dishesPromise.PromiseValue
    //console.log(dishes);
    this.dishContainer.empty();
    dishes.forEach(function(dish) {
      let itemDetail = $(this.itemDetailView(dish));
      this.dishContainer.append(itemDetail);
    }.bind(this))
  }

}