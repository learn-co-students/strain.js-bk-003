'use strict';

var strain = {
	keep: function (array, func){
		var keep_array = [];
	  	for (var i = 0; i < array.length; i++) {
	  		if (func(array[i]))
	  			keep_array.push(array[i]);
	  	};
	  	return keep_array;
	},
	discard: function (array, func){
		var discard_array = [];
		for (var i = 0; i < array.length; i++) {
	  		if (!func(array[i]))
	  		 	discard_array.push(array[i]);
	  	};
	  	return discard_array;
	}
};