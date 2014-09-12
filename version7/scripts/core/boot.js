(function($, window, document) {
    "use strict";

    /*
    *	@module 
    */
    App.bootstrap = (function () {

		var Modules = [],
			Initialized = [];

		function pull() {
			for (var module in App) {
				if (module != '_proto_') {
					if (typeof App[module] != 'undefined') {
						if (typeof App[module].init != 'undefined')
							Modules.push(App[module]);
					}
				}
			}
			Modules.sort(function(a,b){ return b.Weight.weightValue() - a.Weight.weightValue();});
			invokeAll();
		}

		function invokeAll() {
			var len = Modules.length - 1;
			for(var i=len;i>=0;i--) {
				var current = Modules[i];
				if ((typeof current.Dependencies !== 'undefined' && checkDependencies(current)) || 
					typeof current.Dependencies === 'undefined') {
					invokeModule(current, i);
					break;
				} else {
					if (i ===0) 
						setTimeout(invokeAll, 500);
				}
			}
		}

		function invokeModule(module, index) {
			module.init();

			var len = Modules.length - 1;
			Modules.splice(index, 1);
			invokeAll();
		}

		function checkDependencies(module) {
			
			var current = module.Dependencies,
				len = current.length - 1;
			for (var i=len;i>=0;i--) {
				var depends = current[i];
				if ($.inArray(depends, Initialized) == -1)
					return false;
			}
			return true;
		}

		function setInitialized(name) {
			Initialized.push(name);
		}

		return {
			pull : pull,
			setInitialized : setInitialized
		};

    })();

    window.onload = App.bootstrap.pull;

}(jQuery, this, this.document));