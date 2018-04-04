var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'Lkjh!@2018',
database:'moodle'


});
module.exports=connection;