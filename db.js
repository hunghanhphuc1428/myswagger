var sql = require("mssql");

// config for your database
var config = {
    user: 'hunghanhphuc',
    password: 'yXudxFLPFfk8pk7Y',
    server: 'sql-hhp1428.database.windows.net', 
    database: 'ProductDB' ,
    options: {
      enableArithAbort: true,
      encrypt:true 
    },
   
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))
  
  module.exports = {
    sql, poolPromise
  }