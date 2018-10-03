// Capitalize a phrase
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Parse a date
String.prototype.dateParse = function(){
  var parts = this.split('-');
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

// Gets a 'dash-less' version of a string
String.prototype.replaceDashes = function(){
  return this.replace(/-/g, " ");
}

// Get current date
function getCurrentDate(){
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();

	return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
}

// Gets the value of a query string parameter based on its key
function getQueryStringParameterValueByParameterName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));

}
