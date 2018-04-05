var express = require('express');  
var router = express.Router();  
var UserInCourse = require('../models/UserInCourse');  
router.get('/:id?', function(req, res, next) {  
    if (req.params.id) {  
        UserInCourse.getUsersInCourseByCourseId(req.params.id, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        UserInCourse.getUsersInCourses(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  

module.exports = router; 