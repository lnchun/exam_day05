require("babel-polyfill");
var mysql = require('mysql');
var pool=global.pool;
if(!pool){
	pool=mysql.createPool({
		database:'exam',
		user:'root',
		password:'root'
	});
	global.pool=pool;
}

function getConnection(){
	return new Promise(function(resolve,reject){
		pool.getConnection(function(err,conn){
			if(!err){
				resolve(conn);
			}else{
				reject(err);
			}
		});
	})	
}

function execute(sql){
	return new Promise(function(resolve,reject){
		var connection;
		getConnection().then(function(conn){
			connection=conn;
			conn.query(sql,function(err,results){
				if(!err){
					resolve(results);
				}else{
					reject(err);
				}
			});
		}).catch(function(err){
			reject(err);
		}).finally(function(){a
			if(connection){
				connection.release();
				console.log('release finally');
			}
		});
	})
}
module.exports={
	getConnection,
	execute
}