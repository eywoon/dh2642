window.onload= function() {
	//We instantiate our model
	const model = new DinnerModel();
	

	//const frontPageView = new FrontPageView(document.querySelector("#frontPageView"));
	const sideBarView = new SideBarView(document.querySelector("#sideBarView"), model);
	//const topBarView = new TopBarView(document.querySelector("#topBarView"), model);
	const dishSearchView = new DishSearchView(document.querySelector("#dishSearchView"), model);
	$("#sideBarView").removeAttr('hidden');
	$("#dishSearchView").removeAttr('hidden');
	/**
	document.querySelector("#sideBarView").show()
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * query for elements in the whole document.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

};
