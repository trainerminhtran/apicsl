var db = require('../dbconnection'); //reference of dbconnection.js  
var Course = {
    getUsersInCourses: function (callback) {
        return db.query(`SELECT 
                                ccp.name AS CourseParentCategory, #added
                                ccplevel.description as Level,
                                cc.name AS CourseCategory,
                                c.fullname AS CourseName,
                                u.id as UserId,
                                u.username Username,
                                u.firstname FirstName,
                                u.lastname LastName,
                                gg.finalgrade FinalGrade,
                                gg.rawgrademax AS MaxiumGrade,
                                gg.rawgrademin AS MinimumGrade
                            # o.description
                        FROM mdl_user u
                        JOIN mdl_user_enrolments ue ON (ue.userid = u.id)
                        JOIN mdl_enrol e ON (ue.enrolid = e.id)
                        JOIN mdl_course c ON (c.id = e.courseid)
                        LEFT JOIN mdl_course_categories cc ON (c.category = cc.id)
                        LEFT JOIN mdl_course_categories ccp ON (cc.parent = ccp.id) 
                        LEFT JOIN mdl_course_categories ccplevel ON (ccp.parent = ccplevel.id) #//this is added
                        LEFT JOIN mdl_grade_items gi ON (gi.courseid= c.id)
                        LEFT JOIN mdl_grade_grades gg ON (gi.id = gg.itemid AND u.id = gg.userid)
                        #LEFT JOIN mdl_outcome_marks om ON (u.id = om.userid AND c.id = om.courseid)
                        #LEFT JOIN mdl_outcome o ON (om.outcomeid = o.id)
                        WHERE gi.itemtype = "course"`, callback);
    },
    getUsersInCourseByCourseId: function (id, callback) {
        return db.query(`SELECT 
                                ccp.name AS CourseParentCategory, #added
                                ccplevel.description as Level,
                                cc.name AS CourseCategory,
                                c.fullname AS CourseName,
                                u.id as UserId,
                                u.username Username,
                                u.firstname FirstName,
                                u.lastname LastName,
                                gg.finalgrade FinalGrade,
                                gg.rawgrademax AS MaxiumGrade,
                                gg.rawgrademin AS MinimumGrade
                            # o.description
                        FROM mdl_user u
                        JOIN mdl_user_enrolments ue ON (ue.userid = u.id)
                        JOIN mdl_enrol e ON (ue.enrolid = e.id)
                        JOIN mdl_course c ON (c.id = e.courseid)
                        LEFT JOIN mdl_course_categories cc ON (c.category = cc.id)
                        LEFT JOIN mdl_course_categories ccp ON (cc.parent = ccp.id) 
                        LEFT JOIN mdl_course_categories ccplevel ON (ccp.parent = ccplevel.id) #//this is added
                        LEFT JOIN mdl_grade_items gi ON (gi.courseid= c.id)
                        LEFT JOIN mdl_grade_grades gg ON (gi.id = gg.itemid AND u.id = gg.userid)
                        #LEFT JOIN mdl_outcome_marks om ON (u.id = om.userid AND c.id = om.courseid)
                        #LEFT JOIN mdl_outcome o ON (om.outcomeid = o.id)
                        WHERE gi.itemtype = "course" AND c.id=?`, [id], callback);
    }
};
module.exports = UserInCourse;  