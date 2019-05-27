const poolPromise = require('../../services/mysql');
const queries = require('./queries');

exports.getAll = async (req,res,next) => {
    console.log(req.session)
    try{
        const [rows,_] = await poolPromise.query(queries.getAllArticles);
        res.status(200).send(rows);
    }catch(e) {
        res.status(500).end();
    }
    // res.status(200).send();
}

exports.insert = async (req,res,next) => {
    const body = req.body;
    try{
        const [result] = await poolPromise.query(queries.insertArticles, [body]);
        if(result.insertId){
            return res.status(200).send(result);
        }
        return res.status(400).send();
    }catch(e) {
        return res.status(500).end();
    }
}

exports.update = async (req,res,next) => {
    const body = req.body;
    
    try{
        const [result] = await poolPromise.query(queries.updateArticles, [body,body.id]);
        if(result.affectedRows){
            return res.status(200).send(result);
        }
        return res.status(400).send();
    }catch(e) {
        console.log(e)
        return res.status(500).end();
    }
}

exports.delete = async (req,res,next) => {
    const {id} = req.body;
    
    try{
        const [result] = await poolPromise.query(queries.deleteArticle, [id]);
        if(result.affectedRows){
            return res.status(200).send(result);
        }
        return res.status(400).send();
    }catch(e) {
        console.log(e)
        return res.status(500).end();
    }
}