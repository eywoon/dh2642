class DishDetailView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.dishName = $(container).find("#dish-name");
    this.dishImage = $(container).find("#dish-image");
    this.dishDescription = $(container).find("#dish-description");
    this.dishPreparation = $(container).find("#dish-preparation");
    this.numberOfGuests = $(container).find("#numberOfGuests");
    this.tableEntryPoint = $(container).find("thead");
    this.table = $(container).find("#ingredient-list");
    this.totalPriceTag = $(container).find("#totalPriceTag");
    this.addButton = $(container).find("#add-button");
    this.backButton = $(container).find("#back-button");
    model.addObserver(this);
  }

  update(model, changeDetails) {
    let guests = this.model.getNumberOfGuests();
    switch (changeDetails) {
      case 0:
        this.numberOfGuests.html(guests)
        this.table.find('.variable-td').each((i, e) => {
          if (e.hasAttribute("data-single-amount")) {
            e.innerHTML = e.getAttribute("data-single-amount") * guests
          } else {
            e.innerHTML = guests;
          }
        })
        this.totalPriceTag.html("TODO");
        break;
      case 2:
        let dish = this.model.getCurrentSelection()
        this.model.getDish(dish.id).then(res => {
          res[0].then(dish => {
            console.log(dish);
            this.dishName.html(dish.title);
            this.dishImage.attr("src", dish.image);
            this.numberOfGuests.html(guests)
            $(this.container).find(".recipe-data").remove();
    
            dish.extendedIngredients.forEach((ingredient) => {
              this.tableEntryPoint.after(this.tableRow(ingredient, guests));
            })
          })
          
          res[1].then(dish=> {
            this.dishDescription.html(dish.summary);
          }).then("all done")
          
        })
        
        this.totalPriceTag.html("TODO");
        break;
    }
  }

  tableRow(ingredient, guests) {
    let price = 1;
    var html = `
      <tr class="recipe-data">
        <td class="variable-td" data-single-amount=${ingredient.amount}>${ingredient.amount}</td>
        <td>${ingredient.unit}</td>
        <td>${ingredient.name}</td>
        <td>SEK</td>
        <td class="variable-td">${guests}</td>
      </tr>
    `;
    return html;
  }
  // in lab 2, the Observer update method will come here
}