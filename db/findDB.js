var pool=require('./pool');

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
		console.log("db",department_id,subjectLevel_id,subjectType_id,topic_id);
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

}


















