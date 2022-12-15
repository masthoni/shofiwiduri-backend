const pool = require("../../config/db")
const queries = require("./queries");

const getKategori = (req, res) => {
   pool.query(queries.getData) .then( result =>{
        return res.status(200).json(result.rows)
    })
}

const addKategori = (req, res) => {
    const { kategori} = req.body;
    pool.query(queries.insertData, [ kategori])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mendapatkan data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addKategori', e)
         return res.status(500).json({
             message: 'Gagal menambahkan data',
         });
     })
 }

 const updateKategori = (req, res) => {
    const { kategori, id} = req.body;
    pool.query(queries.updateData, [kategori, id])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mengupdate data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addKategori', e)
         return res.status(500).json({
             message: 'Gagal mengupdate data',
         });
     })
 }

 const deleteKategori = (req, res) => {
    const { id } = req.params;
    pool.query(queries.deleteData, [ parseInt(id)])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil menghapus data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addKategori', e)
         return res.status(500).json({
             message: 'Gagal menghapus data',
         });
     })
 }

module.exports = {
    getKategori,
    addKategori,
    updateKategori,
    deleteKategori,
}