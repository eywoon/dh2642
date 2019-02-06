window.onload= function() {
	new GeneralStateController();
};

class GeneralStateController {
	
	constructor() {
		const model = new DinnerModel();
		const frontPageView = new FrontPageView(document.querySelector("#frontPageView"));
		const frontPageViewController = new FrontPageViewController(frontPageView, model, this);
		const sideBarView = new SideBarView(document.querySelector("#sideBarView"), model);
		const sideBarViewController = new SideBarViewController(sideBarView, model, this);
		const topBarView = new TopBarView(document.querySelector("#topBarView"), model);
		const topBarViewController = new TopBarViewController(topBarView, model, this);
		const dishSearchView = new DishSearchView(document.querySelector("#dishSearchView"), model, this);
		const dishSearchViewController = new DishSearchViewController(dishSearchView, model, this);
		const dishDetailView = new DishDetailView(document.querySelector("#dishDetailView"), model);
		const dishDetailViewController = new DishDetailViewController(dishDetailView, model, this);
		const dinnerOverView = new DinnerOverView(document.querySelector("#dinnerOverView"), model);
		const dinnerOverViewController = new DinnerOverViewController(dinnerOverView, model, this);
		const dinnerPrintView = new DinnerPrintView(document.querySelector("#dinnerPrintView"), model);
		const dinnerPrintViewController = new DinnerPrintViewController(dinnerPrintView, model);
		this.renderFrontPage()
	}
	
	renderFrontPage() {
		this.hideAll()
		$("#frontPageView").removeAttr('hidden');
	}
	
	renderDishSearch() {
		this.hideAll()
		$("#sideBarView").removeAttr('hidden');
		$("#dishSearchView").removeAttr('hidden');
	}
	
	renderDishDetail() {
		this.hideAll()
		$("#sideBarView").removeAttr('hidden');
		$("#dishDetailView").removeAttr('hidden');
	}
	
	renderDinnerView() {
		this.hideAll()
		$("#topBarView").removeAttr('hidden');
		$("#dinnerOverView").removeAttr('hidden');
	}
	
	renderDinnerPrint() {
		this.hideAll()
		$("#topBarView").removeAttr('hidden');
		$("#dinnerPrintView").removeAttr('hidden');
	}
	
	hideAll() {
		$("#sideBarView").attr('hidden', true);
		$("#frontPageView").attr('hidden', true);
		$("#topBarView").attr('hidden', true);
		$("#dishSearchView").attr('hidden', true);
		$("#dishDetailView").attr('hidden', true);
		$("#dinnerPrintView").attr('hidden', true);
		$("#dinnerOverView").attr('hidden', true);
	}
	
}
 
