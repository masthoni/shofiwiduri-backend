const pool = require("../../config/db")
const queries = require("./queries");


const getPostingan_artikel = (req, res) => {
   pool.query(queries.getData) .then( result =>{
        return res.status(200).json(result.rows)
    })
}
const getPostingan_artikelbykategori = (req, res) => {
   pool.query(queries.getDataByKategori, [req.params.kategori]) .then( result =>{
        return res.status(200).json(result.rows)
    })
}


const addPostingan_artikel = (req, res) => {
    const { judul, isi, kategori, gambar} = req.body;
    pool.query(queries.insertData, [ judul, isi, kategori, gambar])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mendapatkan data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addPostingan_artikel', e)
         return res.status(500).json({
             message: 'Gagal menambahkan data',
         });
     })
 }

 const updatePostingan_artikel = (req, res) => {
    var { judul, isi, kategori,gambar, id} = req.body;
    pool.query(queries.updateData, [judul, isi, kategori, gambar, id])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mengupdate data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error Postingan_artikel', e)
         return res.status(500).json({
             message: 'Gagal mengupdate data',
         });
     })
 }

 const deletePostingan_artikel = (req, res) => {
    const { id } = req.params;
    pool.query(queries.deleteData, [ parseInt(id)])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil menghapus data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addPostingan_artikel', e)
         return res.status(500).json({
             message: 'Gagal menghapus data',
         });
     })
 }

module.exports = {
    getPostingan_artikel,
    getPostingan_artikelbykategori,
    addPostingan_artikel,
    updatePostingan_artikel,
    deletePostingan_artikel,
}