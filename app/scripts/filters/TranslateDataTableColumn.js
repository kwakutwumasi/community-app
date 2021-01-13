(function (module) {
    mifosX.filters = _.extend(module, {
        prettifyName: function () {
            var prettifyColumnName = function (input, split) {
                var temp = input.split(split);
                if (temp[1] && temp[1] != "") {
                    return temp[1];
                } else {
                    return temp[0];
                }
            }

            return function (input) {
            	if(!input)
            		return '';
            
                var retVal;
                if (input.indexOf("_cd_") > 0) {
                    retVal = prettifyColumnName(input, "_cd_");
                } else if (input.indexOf("_cv_") > 0) {
                    retVal = prettifyColumnName(input, "_cv_");
                } else if (input.indexOf("_cd") > 0) {
                    retVal = prettifyColumnName(input, "_cd");
                } else if (input.indexOf("_cv") > 0) {
                    retVal = prettifyColumnName(input, "_cv");
                } else {
                	retVal = input;
                }
                
                var arr = retVal.split(/[_]/);
			    var newStr = "";
			    for (var i = 1; i < arr.length; i++) {
			        newStr += " "+ arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
			    }
			    return arr[0].charAt(0).toUpperCase() + arr[0].slice(1) + newStr;
            }
        }
    });
    mifosX.ng.application.filter('prettifyName', ['dateFilter', mifosX.filters.prettifyName]).run(function ($log) {
        $log.info("prettifyName filter initialized");
    });
}(mifosX.filters || {}));
