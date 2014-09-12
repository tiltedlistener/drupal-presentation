
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
		var Weight = new App.Weight(7);
		var Dependencies = ["Database", "Theme"];
		
		function init() {
			App.Theme.addTheme("BuildPostList", App.Posts.BuildPostList);
			App.Theme.addTheme("BuildPost", App.Posts.BuildPost);
			getPostData(buildPosts);	
		}

		function getPostData(callback) {
			App.Database.getData('posts', callback);
		}

		function buildPosts(data) {
			App.bootstrap.setInitialized(Name);	
			
			var obj = $.parseJSON(data),
				html = App.Theme.BuildPostList(obj);

			App.Theme.addToRegion('main', 2, html);
		}

		return {
			Name : Name,
			Weight : Weight,
			Dependencies : Dependencies,
			init : init
		};

    })();

	/*
	*	@theme
	*/
	App.Posts.BuildPostList = function(obj) {

		var html = document.createElement('div');
			html.className = 'list ';
			html.id = "blog-list";

		for(var post in obj) {
			var current = obj[post],
				result = App.Theme.BuildPost({'title' : current.title, 'body' : current.body});

			html.appendChild(result);
		}

		return html;
	};

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

