(function($, window, document) {
    "use strict";

    /*
    *	@module
    */
    App.Page = (function() {

		function init() {
			build();
		}

		function build() {

			$.ajax({
				url : 'http://localhost:8888/drupal-presentation/fetch.php?type=posts',
				method : 'GET',
				dataType : 'text',
				success : function (data) {
					var obj = $.parseJSON(data);

					for(var post in obj) {
						var current = obj[post],
							result = App.Theme.BuildPost({'title' : current.title, 'body' : current.body}),
							result2 = App.Theme.BuildPost({'title' : current.title, 'href' : current.id});

						$('#main').append(result);
						$('#sidebar').append(result2);
					}
				},
				failure : function (error) {
					console.log(error);
				}
			});

		}

		return {
			init : init
		};

    })();

}(jQuery, this, this.document));

