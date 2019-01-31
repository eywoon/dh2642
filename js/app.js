window.onload= function() {
	//We instantiate our model
	const model = new DinnerModel();
	

	const frontPageView = new FrontPageView(document.querySelector("#frontPageView"));
	const sideBarView = new SideBarView(document.querySelector("#sideBarView"), model);
	const sideBarViewController = new SideBarViewController(sideBarView, model);
	const topBarView = new TopBarView(document.querySelector("#topBarView"), model);
	const topBarViewController = new TopBarViewController(topBarView, model);
	const dishSearchView = new DishSearchView(document.querySelector("#dishSearchView"), model);
	const dishDetailView = new DishDetailView(document.querySelector("#dishDetailView"), model);
	const dinnerPrintView = new DinnerPrintView(document.querySelector("#dinnerPrintView"), model);
	const dinnerOverView = new DinnerOverView(document.querySelector("#dinnerOverView"), model);
	/**
	document.querySelector("#sideBarView").show()
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * query for elements in the whole document.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

};
window.screen1 = function() {
	hideAll()
	$("#frontPageView").removeAttr('hidden');
}
window.screen2 = function() {
	hideAll();
	$("#sideBarView").removeAttr('hidden');
	$("#dishSearchView").removeAttr('hidden');
}
window.screen3 = function() {
	hideAll()
	$("#sideBarView").removeAttr('hidden');
	$("#dishDetailView").removeAttr('hidden');
}
window.screen5 = function() {
	hideAll();
	$("#topBarView").removeAttr('hidden');
	$("#dinnerOverView").removeAttr('hidden');
}
window.screen6 = function() {
	hideAll();
	$("#topBarView").removeAttr('hidden');
	$("#dinnerPrintView").removeAttr('hidden');
}

function hideAll() {
	console.log("hide");
	$("#sideBarView").attr('hidden', true);
	$("#frontPageView").attr('hidden', true);
	$("#topBarView").attr('hidden', true);
	$("#dishSearchView").attr('hidden', true);
	$("#dishDetailView").attr('hidden', true);
	$("#dinnerPrintView").attr('hidden', true);
	$("#dinnerOverView").attr('hidden', true);
}
