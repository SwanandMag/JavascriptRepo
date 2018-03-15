
var app = angular.module("simpleApp", []);
 
app.controller("simpleController", function($scope){
	

	
	
	$scope.showOnClick = function(obj){
		
		// Declare variables for storing JSON and string
		var jsonArray = [];
		var stringObj = "";
		
		// Get all keys of form like IE Number, Name etc.
		var keys = Object.keys(obj);
		
		// Loop through keys to add each element as JSON object
		for(var i=0 ; i<keys.length; i++){
			
			// Append all values to string object
			stringObj+= "position" + (i+1) + ":" + "{" + keys[i] + ":" + obj[keys[i]] + "}";
			
			jsonArray.push(stringObj);
			stringObj = "";
		}
		
		// To check output of Array in JSON format
		console.log(jsonArray);
		
});