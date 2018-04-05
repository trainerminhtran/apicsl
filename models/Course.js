var db = require('../dbconnection'); //reference of dbconnection.js  
var Course = {
    getAllCourses: function (callback) {
        return db.query(`select c.id as CourseId,
                            ccp.name AS CourseParentCategory, 
                            cc.name AS CourseCategory,
                            c.fullname CourseName, 
                            c.StartDate as StartDate,
                            c.enddate as EndDate 
                        from mdl_course c
                        inner Join mdl_course_categories ca on c.category = ca.id
                        LEFT JOIN mdl_course_categories cc ON (c.category = cc.id)
                        LEFT JOIN mdl_course_categories ccp ON (cc.parent = ccp.id)`, callback);
    },
    getCourseById: function (id, callback) {
        return db.query("select * from mdl_course where Id=?", [id], callback);
    }
};
module.exports = Course;  