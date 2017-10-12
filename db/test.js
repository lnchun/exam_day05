require('babel-polyfill');
var findDB=require('./findDB');
var check=require('../model/check');
/*
findDB.findByType(1).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log("报错了"+error);
});

findDB.findByTopic(4).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log("报错了"+error);
});
*/

/*findDB.querySubject(2,1,1,6).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log("报错了"+error);
});*/
/*
findDB.checkSubject(1,"未").then(function(data){
	console.log(data);
}).catch(function(error){
	console.log("报错了"+error);
});
*/

findDB.choiceSubject(2).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log("报错了"+error);
});