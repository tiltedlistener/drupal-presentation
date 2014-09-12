(function($, window, document) {
    "use strict";

    /*
    *	@class
    */
    App.Weight = function (weight) {
		this.value = weight;

		this.weightValue = function () {
			return this.value;
		};
    };

}(jQuery, this, this.document));