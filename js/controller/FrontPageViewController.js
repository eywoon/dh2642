class FrontPageViewController{
    constructor(view, model, generalController) {
        view.createDinnerButton.addEventListener('click', () => {
            alert("front screen click");
            generalController.hideAll();
           // generalController.showScreen('SIDE-BAR-VIEW');
        })

    }
}


