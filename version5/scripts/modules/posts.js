
(function($, window, document) {
    "use strict";
    
    /*
    *	@module 
    */
    App.Posts = (function() {

		var MainDiv;

		function init() {
			MainDiv = $('#main');
			getPostData(buildPosts);
		}

		function getPostData(callback) {
			App.Database.getData('posts', callback);
		}

		function buildPosts(data) {
			var obj = $.parseJSON(data);

			for(var post in obj) {
				var current = obj[post],
					result = App.Theme.BuildPost({'title' : current.title, 'body' : current.body});

				MainDiv.append(result);
			}
		}

		return {
			init : init
		};

    })();
    App.Posts.Weight = new App.Weight(7);


}(jQuery, this, this.document));

