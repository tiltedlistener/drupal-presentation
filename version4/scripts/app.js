(function($, window, document) {
    "use strict";

    var App = {
		'language' : 'en',
		'db' : 'http://localhost:8888/drupal-presentation/fetch.php',
		'test_db' : 'http://localhost:8888/drupal-presentation/fetch_test.php',
		'error_reporting' : 'http://localhost:8888/drupal-presentation/error.php'
    };
	window.App = App;	

}(jQuery, this, this.document));