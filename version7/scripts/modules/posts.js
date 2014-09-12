
(function($, window, document) {
    "use strict";

    /*
    *	@module 
    */
    App.Posts = (function() {

    	/*
    	*	@properties
    	*/
		var Name = "Posts";
		
		/*
		*	@variables
		*/
		var MainDiv;
			
		function init() {
			MainDiv = $('#main');
			App.Theme.addTheme("BuildPost", App.Posts.BuildPost);
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
			App.bootstrap.setInitialized(Name);	
		}

		return {
			init : init,
			Name : Name
		};

    })();

    /*
    *	@properties 
    */
    App.Posts.Weight = new App.Weight(7);
    App.Posts.Dependencies = ["Database", "Theme"];

	/*
	*	@theme
	*/
	App.Posts.BuildPost = function(obj) {
		// Build out main div
		var html = document.createElement('div');
		html.className = 'post ';

		// Build out components
		var titleNode = App.Theme.CreateTitle(obj.title, obj.href),
			bodyNode = (typeof obj.body !== 'undefined') ? App.Theme.CreateBody(obj.body) : document.createTextNode('');

		// Adding components to return
		html.appendChild(titleNode);
		html.appendChild(bodyNode);

		return html;
	};


}(jQuery, this, this.document));

