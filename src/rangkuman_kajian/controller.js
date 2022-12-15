const pool = require("../../config/db")
const queries = require("./queries");

const getRangkuman_kajian = (req, res) => {
   pool.query(queries.getData) .then( result =>{
        return res.status(200).json(result.rows)
    })
}

const addRangkuman_kajian = (req, res) => {
    const { judul, keterangan,lampiran,  kategori, id_kajian} = req.body;
    pool.query(queries.insertData, [ judul, keterangan, lampiran,kategori, id_kajian])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mendapatkan data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addRangkuman_kajian', e)
         return res.status(500).json({
             message: 'Gagal menambahkan data',
         });
     })
 }

 const updateRangkuman_kajian= (req, res) => {
    var { judul, keterangan,lampiran, kategori,id_kajian, id} = req.body;
    pool.query(queries.updateData, [judul, keterangan, lampiran,kategori,id_kajian, id])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mengupdate data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error Rangkuman_kajian', e)
         return res.status(500).json({
             message: 'Gagal mengupdate data',
         });
     })
 }

 const deleteRangkuman_kajian = (req, res) => {
    const { id } = req.params;
    pool.query(queries.deleteData, [ parseInt(id)])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil menghapus data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addRangkuman_kajian', e)
         return res.status(500).json({
             message: 'Gagal menghapus data',
         });
     })
 }

module.exports = {
    getRangkuman_kajian,
    addRangkuman_kajian,
    updateRangkuman_kajian,
    deleteRangkuman_kajian,
}