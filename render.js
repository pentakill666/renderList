var widget = {};
widget = {
	renderList:function(wrapperSelector,templateSelector,data) {
        String.prototype.temp = function(obj) {
            return this.replace(/\%\w+\%/gi, function(matchs) {
                var returns = obj[matchs.replace(/\%/g, "")];       
                return (returns + "") == "undefined"? "": returns;
            });
        }
        var htmlList = '';
        var htmlTemp = $(templateSelector).html();
        for (var i = 0; i < data.length; i++) {
           htmlList += htmlTemp.temp(data[i]);
        }
        $(wrapperSelector).html(htmlList);
    }
}
