class DishDetailViewController {
  constructor(view, model, generalController) {
    view.backButton.click(() => generalController.renderDishSearch())
    view.addButton.click(() => {
      model.addSelectionToMenu()
      generalController.renderDishSearch();
    });
  }
}
