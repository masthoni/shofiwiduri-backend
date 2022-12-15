const pool = require("../../config/db")
const queries = require("./queries");

const getDzikir = (req, res) => {
   pool.query(queries.getData) .then( result =>{
        return res.status(200).json(result.rows)
    })
}


const addDzikir = (req, res) => {
    const {latin, arti, cara, manfaat} = req.body;
    pool.query(queries.insertData, [latin, arti, cara, manfaat])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mendapatkan data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addDzikir', e)
         return res.status(500).json({
             message: 'Gagal menambahkan data',
         });
     })
 }

 const updateDzikir = (req, res) => {
    const {latin, arti, cara, manfaat, id} = req.body;
    pool.query(queries.updateData, [latin, arti, cara, manfaat, id])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mengupdate data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addDzikir', e)
         return res.status(500).json({
             message: 'Gagal mengupdate data',
         });
     })
 }

 const deleteDzikir = (req, res) => {
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
    getDzikir,
    addDzikir,
    updateDzikir,
    deleteDzikir,
}