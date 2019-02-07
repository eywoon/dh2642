class DishSearchViewController {
  constructor(view, model, generalController) {
    this.view = view;
    this.model = model;
    this.generalController = generalController;
    view.typeSelect.change(this.renderDishes.bind(this));
    view.searchButton.click(this.renderDishes.bind(this));
    view.searchInput.keypress(function(e) {
      if (e.which == 13) {
        this.view.searchButton.click();
      }
    }.bind(this));
    this.renderDishes()
    
  }
  
  renderDishes() {
    let type = this.view.typeSelect.val();
    let filter = this.view.searchInput.val();
    let dishes = [];
    let body = $("body");
    body.addClass("loading");
    this.model.getAllDishes(type, filter).then((result) => {
      this.view.dishContainer.empty();
      result.forEach(dish => {
        let itemDetail = new ItemDetailView(this.view.dishContainer, this.model, dish);
        let itemDetailController = new ItemDetailViewController(itemDetail, this.model, this.generalController)
      })
      body.removeClass("loading");
    }).catch(error => console.log(error))
  }
}