(function($, window, document) {
    "use strict";

    App.Weight = function (weight) {
		this.value = weight;

		this.weightValue = function () {
			return this.value;
		};
    };

}(jQuery, this, this.document));