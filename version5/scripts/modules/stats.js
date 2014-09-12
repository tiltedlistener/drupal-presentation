
(function($, window, document) {
    "use strict";
    
    /*
    *	@module 
    */
    App.Stats = (function() {

		var	Stats;

		function init() {			
			Stats = $('#stats');
			getStatData(buildStats);
		}

		function getStatData(callback) {
			App.Database.getData('stats', callback);
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

    App.Stats.Weight = new App.Weight(6);

}(jQuery, this, this.document));

