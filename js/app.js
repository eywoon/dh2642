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
		const dishSearchView = new DishSearchView(document.querySelector("#dishSearchView"), model);
		const dishSearchViewController = new DishSearchViewController(dishSearchView, model, this);
		const dishDetailView = new DishDetailView(document.querySelector("#dishDetailView"), model);
		const dishDetailViewController = new DishDetailViewController(dishDetailView, model, this);
		const dinnerOverView = new DinnerOverView(document.querySelector("#dinnerOverView"), model);
		const dinnerOverViewController = new DinnerOverViewController(dinnerOverView, model, this);
		const dinnerPrintView = new DinnerPrintView(document.querySelector("#dinnerPrintView"), model);
		const dinnerPrintViewController = new DinnerPrintViewController(dinnerPrintView, model);
		this.screen1();
	}
	
	screen1() {
		this.hideAll()
		$("#frontPageView").removeAttr('hidden');
	}
	
	screen2() {
		this.hideAll()
		$("#sideBarView").removeAttr('hidden');
		$("#dishSearchView").removeAttr('hidden');
	}
	
	screen3() {
		this.hideAll()
		$("#sideBarView").removeAttr('hidden');
		$("#dishDetailView").removeAttr('hidden');
	}
	
	screen5() {
		this.hideAll()
		$("#topBarView").removeAttr('hidden');
		$("#dinnerOverView").removeAttr('hidden');
	}
	
	screen6() {
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
 
