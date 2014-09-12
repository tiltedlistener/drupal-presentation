(function($, window, document) {
    "use strict";

    /*
    *	@module 
    */
    App.bootstrap = (function () {

		function pull() {
			App.Database.init(App.db);
			App.Theme.init(App.language);
			App.Page.init();
		}

		return {
			pull : pull
		};

    })();

    window.onload = App.bootstrap.pull;

}(jQuery, this, this.document));