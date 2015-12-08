app.config(function ($stateProvider) {
	$stateProvider.state('artist.songs', {
		url: '/songs',
		template: '<song-list songs="artist.songs"></song-list>'
	});
});
