window.onload= function() {
	//We instantiate our model
	const model = new DinnerModel();
	
	// And create the instance of ExampleView
	const frontPageView = new FrontPageView(document.querySelector("#frontPageView"));
	//const sideBarView = new SideBarView(document.querySelector("#frontPageView"), model);
	
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * query for elements in the whole document.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

};
