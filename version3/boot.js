(function($, window, document) {
    "use strict";

    App.bootstrap = (function () {

		function pull() {
			App.Theme.init(App.language);
			App.Page.init();
		}

		return {
			pull : pull
		};

    })();

    window.onload = App.bootstrap.pull;

}(jQuery, this, this.document));