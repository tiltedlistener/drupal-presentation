(function($, window, document) {
    "use strict";

	/*
	*	@module 
	*/
    App.Database = (function () {

		/*
		*	@properties
		*/
		var Name = "Database";
		var Weight = new App.Weight(3);
		var Dependencies = [];

		/*
		*	@variables
		*/
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
			Name : Name,
			Weight : Weight,
			Dependencies : Dependencies,
			init : init,
			getData : getData
		};

    })();



}(jQuery, this, this.document));