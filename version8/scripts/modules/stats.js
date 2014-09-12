
(function($, window, document) {
    "use strict";

    /*
    *	@module
    */
    App.Stats = (function() {

		/*
		*	@properties 
		*/
		var Name = "Stats";
		var Weight = new App.Weight(6);
		var Dependencies = ["Database", "Theme", "Posts"];


		function init() {		
			getStatData(buildStats);
			App.Theme.addTheme("BuildStatsList", App.Stats.BuildStatsList);
			App.Theme.addTheme("BuildStat", App.Stats.BuildStat);
		}

		function getStatData(callback) {
			App.Database.getData('stats', callback);
		}

		function buildStats(data) {
			App.bootstrap.setInitialized(Name);	

			var obj = $.parseJSON(data),
				html = App.Theme.BuildStatsList(obj);
			
			App.Theme.addToRegion('sidebar', 1, html);
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
    App.Stats.BuildStatsList = function(obj) {

		var html = document.createElement('div');
			html.className = 'list ';
			html.id = "stat-list";

		var title = App.Theme.CreateTitle('Top Stats');
		title.className = "large ";
		html.appendChild(title);
		
		for (var stat in obj) {
			var current = obj[stat],
				result = App.Theme.BuildStat(current);

			html.appendChild(result);
		}

		return html;
    };

    App.Stats.BuildStat = function(current) {
		var name = App.Theme.CreateTitle(current.player),
			gamePoints = App.Theme.CreateTitle("GP: " + current.gp),
			html = App.Theme.CreateInlineGroup(name, gamePoints);

		return html;
    };


}(jQuery, this, this.document));

