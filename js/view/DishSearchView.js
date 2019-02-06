


class DishSearchView {

  constructor(container, model, generalController) {
    this.generalController = generalController;
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
  
  renderDishes() {
    let option = this.typeSelect.val();
    let filter = this.searchInput.val();
    let dishes = [];
    this.model.getAllDishes(option, filter).then((result) => {
      this.dishContainer.empty();
      result.forEach(function(dish) {
        let itemDetail = new ItemDetailView(this.dishContainer, this.model, dish);
        let itemDetailController = new ItemDetailViewController(itemDetail, this.model, this.generalController)
      }.bind(this))
    })
  }

}