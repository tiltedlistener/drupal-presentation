
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
		var Weight = new App.Weight(4);
		var Dependencies = [];

		/*
		*	@collections Regions
		*/
		var Regions = {};

		/*
		*	@variables
		*/
		var language;

		function init() {
			language = App.language;
			setUpRegions();
			App.bootstrap.setInitialized(Name);
		}

		/*
		*	Setup up regions
		*/
		function setUpRegions() {
			var classRegions = $('.region'),
				len = classRegions.size();
			for (var i=0;i<len;i++) {
				var current = classRegions.eq(i),
					name = current.attr('id');
				
				Regions[name] = { 
					'object' : current,
					'items' : []
				};
			}
		}

		/*
		*	Adds a theme function to the module
		*	@param {name} Callname
		*	@param {fn} the theme function code
		*/
		function addTheme(name, fn) {
			if (typeof App.Theme[name] === 'undefined')
				App.Theme[name] = fn;
			else 
				console.log("Theme already exists");
		}

		/*
		*	Adds a block of HTML to a region
		*	@param {region} Region to place HTML
		*	@param {weight} sort parameter for intraregion display order
		*	@param {html} raw html to put in the region
		*/
		function addToRegion(region, weight, html) {
			var current = Regions[region];
			current.items.push({ 
				'html' : html,
				'weight' : weight
			});

			current.items.sort(function(a,b){ return a.weight - b.weight;});

			var result = '',
				len = current.items.length;
			for(var i=0;i<len;i++) {
				result += current.items[i].html.outerHTML;
			}

			current.object.html(result);
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

		function CreateInlineGroup(itemOne, itemTwo) {
			var html = document.createElement('div');
			html.className = 'inline-group';

			itemOne.className = itemOne.className + 'left ';
			itemTwo.className = itemTwo.className + 'right ';
			html.appendChild(itemOne);
			html.appendChild(itemTwo);			

			return html;
		}


		return {
			Name : Name,
			Weight : Weight,
			Dependencies : Dependencies,
			init : init,
			addTheme : addTheme,
			addToRegion : addToRegion,
			CreateTitle : CreateTitle,
			CreateBody : CreateBody,
			CreateLink : CreateLink,
			CreateInlineGroup : CreateInlineGroup
		};

	})();

}(jQuery, this, this.document));