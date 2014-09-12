(function($, window, document) {
    "use strict";

    /*
    *	@module 
    */
    App.Database = (function () {
		var Name = "Database";
		var resource;

		function init () {
			resource = App.db;
			App.bootstrap.setInitialized(Name);		
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
			Name : Name,
			getData : getData
		};

    })();

    App.Database.Weight = new App.Weight(3);

}(jQuery, this, this.document));