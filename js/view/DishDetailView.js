class DishDetailView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.dishName = $(container).find("#dish-name");
    this.dishImage = $(container).find("#dish-image");
    this.dishDescription = $(container).find("#dish-description");
    this.dishPreparation = $(container).find("#dish-preparation");
    this.numberOfGuests = $(container).find("#numberOfGuests");
    this.tablePointer = $(container).find("thead");
    this.totalPriceTag = $(container).find("#totalPriceTag");
    this.addButton = $(container).find("#add-button");
    this.backButton = $(container).find("#back-button");
    model.addObserver(this);
  }

  update(model, changeDetails) {
    let dish = this.model.getCurrentSelection();
    let guests = this.model.getNumberOfGuests();
    switch (changeDetails) {
      case 0:
        this.numberOfGuests.html(guests)
        $(this.container).find(".recipe-data").remove();
        dish.ingredients.forEach(function(ingredient) {
        this.tablePointer.after(this.tableRow(ingredient, guests));
      }.bind(this))
        this.totalPriceTag.html(model.getDishPrice(dish.id)* guests);
      break;
      case 2:
        this.dishName.html(dish.name);
        this.dishImage.attr("src", "images/" + dish.image);
        this.dishDescription.html(dish.description);
        this.numberOfGuests.html(guests)
        $(this.container).find(".recipe-data").remove();
        dish.ingredients.forEach(function(ingredient) {
          this.tablePointer.after(this.tableRow(ingredient, guests));
        }.bind(this))
        this.totalPriceTag.html(model.getDishPrice(dish.id)* guests);
        break;
    }
  }
  tableRow(ingredient, guests) {
    var price = ingredient.price;
    price *= guests;
    var html =`
      <tr class="recipe-data">
        <td>${ingredient.quantity*guests + " " + ingredient.unit}</td>
        <td>${ingredient.unit}</td>
        <td>SEK</td>
        <td>${price}</td>
      </tr>
    `;
    return html;
  }
  // in lab 2, the Observer update method will come here
}