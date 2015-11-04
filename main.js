// wait for DOM to load before running JS
$(function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  
	$('#search').on('submit', function(event){
		event.preventDefault();
		$('#results').text(" ");
		var query = $('#search_query').val();
		$.get('https://api.spotify.com/v1/search?q='+query+'&type=track', function(data){
			var results = data.tracks.items;
			console.log(results);
			var counter=0;
			results.forEach(function(r){
				var hrefId = '#' + counter;
				$('#results').append('<a id="'+counter +'"href="">'+"<li>" + r.artists[0].name + ": " + r.name + "</li>"+"</a>");
				$(hrefId).attr("href",r.external_urls.spotify);
				counter++;
			});

		});

	});

});