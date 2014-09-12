// Theme Namespace
var Theme = {};

// Build post function
Theme.BuildPost = function(obj) {

	// Build out main div
	var html = document.createElement('div');
	html.className = 'post ';

	// Build out components
	var titleNode = Theme.Title(obj.title, obj.href),
		bodyNode = (typeof obj.body !== 'undefined') ? Theme.Body(obj.body) : document.createTextNode('');

	// Adding components to return
	html.appendChild(titleNode);
	html.appendChild(bodyNode);

	return html;
};

Theme.Title = function (text, href) {

	var html = document.createElement('h2');
	html.className = 'title ';

	var node = (typeof href !== 'undefined') ? Theme.Link(text, href) : document.createTextNode(text);
	html.appendChild(node);

	return html;
};

Theme.Body = function (text) {

	var html = document.createElement('div');
	html.className = 'content ';

	var node = document.createTextNode(text);
	html.appendChild(node);

	return html;
};

Theme.Link = function (text, href) {

	var html = document.createElement('a');
	html.hreflang = 'en';
	html.href = href;
	html.textContent = text;

	return html;
};