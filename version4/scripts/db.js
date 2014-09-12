(function($, window, document) {
    "use strict";

    /*
    *	@module 
    */
    App.Database = (function () {

		var resource;

		function init (rsc) {
			resource = rsc;
		}

		function getData(type, callback) {
			$.ajax({
				url : resource + '?type=' + type,
				method : 'GET',
				dataType : 'text',
				success : function (data) {
					callback(data);
				},
				failure : function (error) {
					console.log(error);
					sendError(error);
				}
			});
		}

		function sendError(error) {
			$.post(App.error_reporting, { 'data' : error});
		}

		return {
			init : init,
			getData : getData
		};

    })();

}(jQuery, this, this.document));