
(function($, window, document) {
    "use strict";
    
    /*
    *	@module 
    */
    App.Page = (function() {

		var MainDiv,
			Links,
			Stats;

		function init() {
			
			// Set module vars
			MainDiv = $('#main');
			Links = $('#links');
			Stats = $('#stats');

			// Fire off builds
			getPostData(buildPosts);
			getStatData(buildStats);
		}

		function getPostData(callback) {
			App.Database.getData('posts', callback);
		}

		function getStatData(callback) {
			App.Database.getData('stats', callback);
		}

		function buildPosts(data) {
			var obj = $.parseJSON(data);

			for(var post in obj) {
				var current = obj[post],
					result = App.Theme.BuildPost({'title' : current.title, 'body' : current.body});

				MainDiv.append(result);
			}
		}

		function buildStats(data) {
			var obj = $.parseJSON(data);
			for (var stat in obj) {
				var current = obj[stat],
					result = App.Theme.CreateTitle(current.player),
					result2 = App.Theme.CreateTitle("GP: " + current.gp);

				Stats.append(result);
				Stats.append(result2);
			}

		}

		return {
			init : init
		};

    })();



}(jQuery, this, this.document));

