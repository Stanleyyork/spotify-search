// wait for DOM to load before running JS
$(function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  
	$('#search').on('submit', function(event){
		event.preventDefault();
		$('#results').append('<img src="https://myaccount.wigan.gov.uk/web/Includes/Images/loader.gif" height="200">'+'</image>');
		$('#results').text(" ");
		var query = $('#search_query').val();
		$.get('https://api.spotify.com/v1/search?q='+query+'&type=track', function(data){
			var results = data.tracks.items;
			console.log(results);
			var counter=0;
			if(results.length > 0){
				results.forEach(function(r){
					var albumImage = r.album.images[0].url;
					$('#results').append('<img src="'+albumImage+'" height="100">'+'</image>'+'<br>');
					$('#results').append('<a href="' + r.external_urls.spotify + '">' + "<b>" + "Song: " + r.name + "</b>" + "</a>");
					$('#results').append("<br>" + "Artist: " + r.artists[0].name);
					$('#results').append("<br>" + "Popularity: " + r.popularity + "<br>");
					$('#results').append('<audio height="100" width="400" controls name="media">' + '<source src=' + r.preview_url + 'type="audio/mpeg">' + '</audio>'+'<br><br>');
				});
			} else {
				$('#results').append("No Results Available");
			}
		});

	});

});