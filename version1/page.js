$.ajax({
	url : 'http://localhost:8888/drupal-presentation/fetch.php?type=posts',
	method : 'GET',
	dataType : 'text',
	success : function (data) {
		var obj = $.parseJSON(data);

		for(var post in obj) {
			var current = obj[post];
			$('#main').append('<div class="post"><h2 class="title">' + current.title + '</h2><p>' + current.body + '</p></div>');
		}
	},
	failure : function (error) {
		console.log(error);
	}
});