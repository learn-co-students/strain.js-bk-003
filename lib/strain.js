'use strict';

var strain = {

  keep: function(array, func) {
  	var keptArray = [];
  	for (var i = 0; i < array.length; i++) {
  		if (func(array[i])) {
  			keptArray.push(array[i]);
  		}
  	} 	
  	return keptArray;
  },

  discard: function(array, func) {
  	for (var i = 0; i < array.length; i++) {
  		if (func(array[i])) {
  			array.splice(i, 1);
  			i--
  		}
  	} 	
  	return array;
  }

};

strain.keep([1, 2, 3], function(e) { return e < 10; });