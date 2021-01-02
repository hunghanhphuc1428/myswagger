const {sql, poolPromise} = require('./db')
const fs = require('fs')
var rawdata = fs.readFileSync('./queries.json')
var queries = JSON.parse(rawdata);
class MainController {
   async getAllData(req, res){
       // #swagger.tags = ['getData']
        // #swagger.description = 'Endpoint para obter um usuário.'
        try{
           const pool = await poolPromise
           const result = await pool.request().query(queries.getAllData)
           
           res.json(result.recordset)
        
        }
        catch (error){
            res.status(500)
            res.send(error.message)
        }
        finally{
            
        }
    }
    async addNewData(req, res){
        // #swagger.tags = ['Add Data']
        // #swagger.description = 'Endpoint para obter um usuário.'


        
       
        const name = req.query.name != null ? req.query.name : req.body.name;
        const image = req.query.image != null? req.query.image : req.body.image;

        try{
            if(name != null && image != null){
                const pool = await poolPromise
                const result = await  pool.request().input('name', sql.VarChar, name)
                                                    .input('image', sql.VarChar, image)
                                                    .query(queries.addNewData)
                                                    res.json(result)
            }
            else{
                res.send('Please fill all the details')
            }

        }
        catch(error){
            res.status(500)
            res.send(error.message)
        }
    }

    async updateData(req, res){
        const name = req.query.name != null ? req.query.name : req.body.name;
        const id = req.query.id != null? req.query.id : req.body.id;
        try{
            if(name!= null && id != null){
                const pool = await poolPromise
                const result = await pool.request()
                .input('name', sql.VarChar, name)
                .input('id', sql.Int, id)
                .query(queries.updateData)
                res.json(result)
            }
            else{
                res.send("All fields are required")
            }
        }
        catch(error){
            res.status(500)
            res.send(error.message)
        }
    }
    async deleteData(req, res){
        const id = req.query.id != null? req.query.id : req.body.id;
        try{
            if(  id != null){
                const pool = await poolPromise
                const result = await pool.request().input('id', sql.Int, id).query(queries.deleteData)
                res.json(result)
                
            }
            else{
                res.send("All fields are required")
            }
        }catch(error){
            res.status(500)
            res.send(error.message)
        }
        
    }

}

const controller = new MainController()
module.exports = controller;