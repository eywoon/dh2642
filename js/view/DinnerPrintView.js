class DinnerPrintViewController {
  constructor(view, model) {

  }
}

class DinnerPrintView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    model.addObserver(this);
  }
  update(model, changeDetails) {
    if (changeDetails === 1) {
      $(this.container).empty();
      let dishes = model.getFullMenu();
      dishes.forEach(function(dish) {
        if(dish !== null) {
            $(this.container).append(this.getDishView(dish));
        }
      }.bind(this))
    }
  }
  getDishView(dish) {
    return (
      `
    <div class="row margin-bottom">
      <div class="col-xs-12 col-sm-2">
        <img class="myimage" src="images/`+dish.image+`" alt="">
      </div>
      <div class="col-xs-12 col-sm-5">
        <div class="side-pad">
          <h4 class="description-header">`+dish.name+`</h4>
          <p>`+dish.description+`</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-5">
        <div class="side-pad">
          <h4 class="description-header">Preparation</h4>
          <p>This is how you prepare the dish</p>
        </div>
      </div>
    </div>
    `
    )
  }
  // in lab 2, the Observer update method will come here
}