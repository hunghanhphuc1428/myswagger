var express = require('express');
var router = express.Router();
const controller = require('../controller')


// sql.connect(config, function (err) {
    
//   if (err) console.log(err);

//   // create Request object
//   var request = new sql.Request();
     
//   // query to the database and get the records
//   request.query('select * from ProductTB', function (err, recordset) {
      
//       if (err) console.log(err)

//       // send records as a response
//       console.table(recordset.recordset);
      
//   });
// });

/* GET home page. */
router.get('/', controller.getAllData);
router.post('/api/addNewData', controller.addNewData);
router.put('/api/updateData', controller.updateData);
router.delete('/api/deleteData', controller.deleteData);

module.exports = router

