(function(module) {
	mifosX.directives = _.extend(module, {
		FormatDatatableNameDirective: function (){
			linker = function(scope, element, attrs, ngModel){
				ngModel.$formatters.push(function(value){
					if(value){
						var arr = value.split(/[_]/);
					    var newStr = "";
					    for (var i = 1; i < arr.length; i++) {
					        newStr += " "+ arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
					    }
					    return arr[0].charAt(0).toUpperCase() + arr[0].slice(1) + newStr;
				    } else {
				    	return value;
				    }
				});
				
				ngModel.$parsers.push(function(value){
					if(value){
						var arr = value.split(/[\s]/);
					    var newStr = "";
					    for (var i = 1; i < arr.length; i++) {
					        newStr += "_"+ arr[i].toLowerCase();
					    }
					    return arr[0].toLowerCase() + newStr;
				    } else {
				    	return value;
				    }
				});
			}
		
			return {
				restrict: 'A',
				require: 'ngModel',
				link: linker
			};
		}
	});
}(mifosX.directives || {}));
mifosX.ng.application.directive("formatDatatableName",[mifosX.directives.FormatDatatableNameDirective]).run(function($log){
	$log.info("FormatDatatableNameDirective initialized");
});