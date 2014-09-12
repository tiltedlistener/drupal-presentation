
(function($, window, document) {
    "use strict";

    /*
    *	@module 
    */
	App.Theme = (function () {

		/*
		*	@properties
		*/
		var Name = "Theme";


		/*
		*	@variables
		*/		
		var language;

		function init() {
			language = App.language;
			App.bootstrap.setInitialized(Name);
		}

		function addTheme(name, fn) {
			if (typeof App.Theme[name] === 'undefined')
				App.Theme[name] = fn;
			else 
				console.log("Theme already exists");
		}

		function CreateTitle(text, href) {

			var html = document.createElement('h2');
			html.className = 'title ';

			var node = (typeof href !== 'undefined') ? CreateLink(text, href) : document.createTextNode(text);
			html.appendChild(node);

			return html;
		}

		function CreateBody(text) {

			var html = document.createElement('div');
			html.className = 'content ';

			var node = document.createTextNode(text);
			html.appendChild(node);

			return html;
		}

		function CreateLink(text, href) {

			var html = document.createElement('a');
			html.hreflang = language;
			html.href = href;
			html.textContent = text;

			return html;
		}


		return {
			init : init,
			Name : Name,
			addTheme : addTheme,
			CreateTitle : CreateTitle,
			CreateBody : CreateBody,
			CreateLink : CreateLink
		};

	})();
	
	App.Theme.Name = "Theme";
	App.Theme.Weight = new App.Weight(4);


}(jQuery, this, this.document));