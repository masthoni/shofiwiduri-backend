const pool = require("../../config/db")
const queries = require("./queries");


const getDoa = (req, res) => {
   pool.query(queries.getData) .then( result =>{
        return res.status(200).json(result.rows)
    })
}


const addDoa = (req, res) => {
    const {judul, latin, arti} = req.body;
    pool.query(queries.insertData, [judul, latin, arti])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mendapatkan data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addDoa', e)
         return res.status(500).json({
             message: 'Gagal menambahkan data',
         });
     })
 }

 const updateDoa = (req, res) => {
    const {judul, latin, arti, id} = req.body;
    pool.query(queries.updateData, [judul, latin, arti, id])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mengupdate data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addDoa', e)
         return res.status(500).json({
             message: 'Gagal mengupdate data',
         });
     })
 }

 const deleteDoa = (req, res) => {
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
    getDoa,
    addDoa,
    updateDoa,
    deleteDoa,
}