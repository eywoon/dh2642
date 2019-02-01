
class DinnerOverViewController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    view.printButton.click(() => {
      window.screen6()
    })
  }
}

class DinnerOverView {
    constructor (container, model) {
	     this.container=container;
	     this.model=model;
       this.printButton = $(container).find("#print-button");
       model.addObserver(this);

    }
    update(model, changeDetails){
      if(changeDetails === 0) {
        console.log("not my cup of tea");
      }
     
    } 
    
    // in lab 2, the Observer update method will come here
}
 
