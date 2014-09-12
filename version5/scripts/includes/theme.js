
(function($, window, document) {
    "use strict";

    /*
    *	@module 
    */
	App.Theme = (function () {

		var language;

		function init() {
			language = App.language;
		}

		// Build post function
		function BuildPost(obj) {

			// Build out main div
			var html = document.createElement('div');
			html.className = 'post ';

			// Build out components
			var titleNode = CreateTitle(obj.title, obj.href),
				bodyNode = (typeof obj.body !== 'undefined') ? CreateBody(obj.body) : document.createTextNode('');

			// Adding components to return
			html.appendChild(titleNode);
			html.appendChild(bodyNode);

			return html;
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
			BuildPost : BuildPost,
			CreateTitle : CreateTitle,
			CreateBody : CreateBody,
			CreateLink : CreateLink
		};

	})();
	
	App.Theme.Weight = new App.Weight(4);


}(jQuery, this, this.document));