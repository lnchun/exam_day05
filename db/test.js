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
/*
findDB.choiceSubject(2).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log("报错了"+error);
});
*/

findDB.saveSubject("这是选择题","这是A选项，这是B选项，这是C选项，这是D选项","未审核","这是选择题","2017-10-12",1,1,1,1).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log("报错了"+error);
});

findDB.saveAnswer("a",'',4).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log("报错了"+error);
});