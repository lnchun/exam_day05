var pool=require('./pool');

function saveAnswer(content,correct){
	var sql="insert into tbl_exam_choice values";
	console.log(content,correct);
	for(var i=0;i<4;i++){
		var content_i=content[i];
		var correct_i=correct[i];
		if(i<3){
			sql+="(null,'"
			+content_i+"','"
			+correct_i+"',null),";
		}else{
			sql+="(null,'"
			+content_i+"','"
			+correct_i+"',null)";
		}
	}
	return pool.execute(sql);
}

module.exports={
	getAllSubjectType(){
		var sql="select * from tbl_exam_subjecttype";
		return pool.execute(sql);
	},
	getAllSubjectLevel(){
		var sql="select * from tbl_exam_subjectlevel";
		return pool.execute(sql);
	},
	getAllDepartmentes(){
		var sql="select * from tbl_exam_epartment";
		return pool.execute(sql);
	},
	getAllTopics(){
		var sql="select * from tbl_exam_topic";
		return pool.execute(sql);
	},
	getDepartmentTopics(id){
		var sql="select * from tbl_exam_topic where id="+id;
		return pool.execute(sql);
	},
	
	querySubject(department_id,subjectLevel_id,subjectType_id,topic_id){
		//console.log("db",department_id,subjectLevel_id,subjectType_id,topic_id);
		var sql="select * from tbl_exam_subject as t_sub where t_sub.department_id="
		+department_id+" and t_sub.subjectLevel_id="
		+subjectLevel_id+" and t_sub.subjectType_id="
		+subjectType_id+" and t_sub.topic_id="
		+topic_id;
		return pool.execute(sql);
	},
	checkSubject(id,checkState){
		var sql="update tbl_exam_subject set checkState='"
		+checkState+"' where id="+id;
		return pool.execute(sql);	
	},
	choiceSubject(subject_id){
		var sql="select * from tbl_exam_choice where subject_id="+subject_id;
		return pool.execute(sql);
	},
	saveSubject(analysis,answer,checkState,stem,uploadTime,department_id,subjectLevel_id,subjectType_id,topic_id){
		console.log(analysis,answer,checkState,stem,uploadTime,department_id,subjectLevel_id,subjectType_id,topic_id);
		var sql="insert into tbl_exam_subject values(null,'"
		+analysis+"','"
		+answer+"','"
		+checkState+"','"
		+stem+"',null,'"
		+department_id+"','"
		+subjectLevel_id+"','"
		+subjectType_id+"','"
		+topic_id+"',null)";
		return pool.execute(sql);
	},
	saveAnswer:saveAnswer

}


















