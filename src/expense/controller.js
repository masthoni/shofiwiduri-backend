const pool = require("../../config/db")
const queries = require("./queries");

const getExpense = (req, res) => {
   pool.query(queries.getData) .then( result =>{
        return res.status(200).json(result.rows)
    })
}

const sumExpense = (req, res) => {
    pool.query(queries.sumData) .then( result =>{
         let totalExpense = result.rows[0].sum
         return res.status(200).json({
             total: parseInt(totalExpense)
         })
     })
 }

const addExpense = (req, res) => {
    const {title, amount} = req.body;
    pool.query(queries.insertData, [title, parseInt(amount)])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mendapatkan data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addExpense', e)
         return res.status(500).json({
             message: 'Gagal menambahkan data',
         });
     })
 }

 const updateExpense = (req, res) => {
    const {title, amount, id} = req.body;
    pool.query(queries.updateData, [title, parseInt(amount), id])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mengupdate data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addExpense', e)
         return res.status(500).json({
             message: 'Gagal mengupdate data',
         });
     })
 }

 const deleteExpense = (req, res) => {
    const { id } = req.params;
    pool.query(queries.deleteData, [ parseInt(id)])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil menghapus data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addExpense', e)
         return res.status(500).json({
             message: 'Gagal menghapus data',
         });
     })
 }

module.exports = {
    getExpense,
    addExpense,
    updateExpense,
    deleteExpense,
    sumExpense,
}