'use strict';

var strain = {
  keep: function(array,callback){
   let filtered =[];
  	array.forEach(function(m){
  		if(callback(m)){
  		  filtered.push(m);
  	    }
  	});
  	return filtered;
  },

 discard: function(array,callback){
 	let filtered = [];
 	array.forEach(function(m){
      if(!callback(m)){
      	filtered.push(m);
      }
 	});
 	return filtered;
  }

};