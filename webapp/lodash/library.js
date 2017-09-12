(function () {
	"use strict";

	jQuery.sap.declare("com.ui.thirdparty.lodash.library");

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name: "com.ui.thirdparty.lodash",
		noLibraryCSS: true
	});

	sap.ui.define(
		//module name
		"com/ui/thirdparty/lodash",
		// node module path
		["com/ui/thirdparty/node_modules/lodash/lodash"],
		// callback
		function () {
			return window._;
		});

})();