(function () {
	"use strict";

	jQuery.sap.declare("com.ui.thirdparty.moment.library");

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name: "com.ui.thirdparty.moment",
		noLibraryCSS: true
	});

	delete window.define; //sap.viz leaves it and moment don't work

	sap.ui.define(
		//module name
		"com/ui/thirdparty/moment",
		// node module path
		["com/ui/thirdparty/node_modules/moment/moment"],
		// callback
		function () {
			return window.moment;
		});

})();