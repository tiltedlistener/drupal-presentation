
(function($, window, document) {
    "use strict";

    /*
    *	@module 
    */
    App.Posts = (function() {

		var Name = "Posts";
		
		// Use variables
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
				App.bootstrap.setInitialized(Name);	
			}
		}

		return {
			init : init,
			Name : Name
		};

    })();

    App.Posts.Weight = new App.Weight(7);
    App.Posts.Dependencies = ["Database", "Theme"];


}(jQuery, this, this.document));

