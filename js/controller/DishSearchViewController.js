class DishSearchViewController {
  constructor(view, model, generalController) {
    this.view = view;
    this.model = model;
    this.generalController = generalController;
    let parent = this;
    view.dishContainer.on('click', '.dish-image, dish-name', function(evt){
      this.model.setCurrentSelection($(evt.target).parent().attr('id').split("-")[1]);
      this.generalController.renderDishDetail()
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