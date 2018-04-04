var db = require('../dbconnection'); //reference of dbconnection.js  
var Course = {  
    getAllCourses: function(callback) {  
        return db.query("Select * from mdl_course", callback);  
    },  
    getCourseById: function(id, callback) {  
        return db.query("select * from mdl_course where Id=?", [id], callback);  
    }
};  
module.exports = Course;  