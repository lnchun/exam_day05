var express=require('express');
var route=express.Router();
var findDB=require('../db/findDB');
var check=require('../model/check');
var Subject=require('../model/Subject');
require('babel-polyfill');

route.get('/getAllSubjectType',function(req,resp){
	findDB.getAllSubjectType().then(function(data){
		resp.send(data);
		console.log(data);
	}).catch(function(error){
		resp.send(error);
	})
});

route.get('/getAllSubjectLevel',function(req,resp){
	
	findDB.getAllSubjectLevel().then(function(data){
		resp.send(data);
		console.log(data);
	}).catch(function(error){
		resp.send(error);
	})
});

route.get('/getAllDepartmentes',function(req,resp){
	
	findDB.getAllDepartmentes().then(function(data){
		resp.send(data);
		console.log(data);
	}).catch(function(error){
		resp.send(error);
	})
});

route.get('/getAllTopics',function(req,resp){
	
	findDB.getAllTopics().then(function(data){
		resp.send(data);
		console.log(data);
	}).catch(function(error){
		resp.send(error);
	})
});

route.get('/getDepartmentTopics',function(req,resp){
	findDB.getDepartmentTopics(req.query.id).then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send(error);
	})
});

route.post('/querySubject',function(req,resp){
	var queryInfo=req.body;
	console.log(queryInfo);
	var dep=queryInfo["department_id"];
	var topic=queryInfo["topic_id"];
	var types=queryInfo["subjectType_id"];
	var level=queryInfo["subjectlevel_id"];
	findDB.querySubject(dep,level,types,topic).then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send(error);
	})
});

route.post('/checkSubject',function(req,resp){
	var queryInfo=req.body;
	console.log(queryInfo);
	var id=queryInfo["id"];
	var checkState=queryInfo["checkState"];
	findDB.checkSubject(id,checkState).then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send(error);
	})
});

route.post('/choiceSubject',function(req,resp){
	var queryInfo=req.body;
	var subject_id=queryInfo["subject_id"];
	findDB.choiceSubject(subject_id).then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send(error);
	});
});

route.post('/saveSubject',function(req,resp){
	var queryInfo=req.body;
	//var id=queryInfo["id"];
	var analysis=queryInfo["analysis"]; 
	var answer=queryInfo["answer"];
	var checkState=queryInfo["checkState"];
	var stem=queryInfo["stem"];
	var uploadTime=queryInfo["uploadTime"];
	var dep=queryInfo["department_id"];
	var level=queryInfo["subjectLevel_id"];
	var type=queryInfo["subjectType_id"];
	var topic=queryInfo["topic_id"];
	//var user=queryInfo["user_id"];
	// var subject_id=queryInfo["subject_id"];

	console.log(queryInfo);
	findDB.saveSubject(analysis,answer,checkState,stem,
		uploadTime,dep,level,type,topic).then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send(error);
	});
});
route.post('/saveAnswer',function(req,resp){
	var queryInfo=req.body;
	var content=queryInfo["content1[]"];
	var correct=queryInfo["correct1[]"];
	findDB.saveAnswer(content,correct).then(function(data){
		resp.end(JSON.stringify(data));
	}).catch(function(error){
		resp.send(error);
	});
});
/*
route.get('getAllSubjects',function(req,resp){
	var sql="select * from tbl_exam_subject"
});
route.post('/subject',function(req,resp){
	var sql="select * from tbl_exam_subject";
	findAllInfo(sql,resp);
	//console.log(resp);
});
*/
/*
function writeHead(resp){
	resp.writeHead(200,'ok',{
		"Content-Type":"text/plain;charset=utf-8",
		"Assess-Control-Allow-Origin":"*"
	});
}
*/
/*
function findAllInfo(sql,resp){
	findDB.execute(sql).then(function(data){
		writeHead(resp);
		resp.end(JSON.stringify(data));
	}).catch(function(err){
		console.log(err);
	});
}
*/
module.exports=route;