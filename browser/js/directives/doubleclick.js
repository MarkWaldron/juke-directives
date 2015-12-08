app.directive('doubleClick', function(PlayerFactory) {
	 return {
	 	restrict: "A",
		scope: {
			doubleClick: '&'
		},
		link: function(scope, element){
      element.on('dblclick', function(){
          scope.doubleClick();
      });
		}
	 };
});
