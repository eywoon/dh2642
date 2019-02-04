class GeneralController{
    constructor(){
        this.views = [];
        this.screens = {};
    }
    hideAll(){
        for(var view of views){
            view.hide();
        }
    }
    addView(view){
        this.views.push(view);
    }
    addScreen(name, viewsToShow){
        this.screens[name] = viewsToShow;
    }
    showScreen(name){
        hideAll();
        for(var view of views){
            view.show();
        }
    }


}
