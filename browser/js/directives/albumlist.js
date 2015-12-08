app.directive('albumList', function() {
	 return {
	 	restrict: "E",
		templateUrl: "/templates/albumlist.html", 
		scope: {
			albums: "="
		}
	 };
});