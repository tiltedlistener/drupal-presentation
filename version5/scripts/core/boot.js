(function($, window, document) {
    "use strict";

    /*
    *	@module 
    */
    App.bootstrap = (function () {

		var Modules = [];

		function pull() {
			// Round up the possible hookable modules
			for (var module in App) {
				if (module != '_proto_') {
					if (typeof App[module] != 'undefined') {
						if (typeof App[module].init != 'undefined')
							Modules.push(App[module]);
					}
				}
			}
			Modules.sort(function(a,b){ return a.Weight.weightValue() - b.Weight.weightValue();});

			for(var mod in Modules) {
				Modules[mod].init();
			}
		}

		return {
			pull : pull
		};

    })();

    window.onload = App.bootstrap.pull;

}(jQuery, this, this.document));