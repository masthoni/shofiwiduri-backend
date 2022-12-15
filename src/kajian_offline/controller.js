const pool = require("../../config/db")
const queries = require("./queries");

const getKajian_offline = (req, res) => {
   pool.query(queries.getData) .then( result =>{
        return res.status(200).json(result.rows)
    })

}
const getKajian_offlineById = (req, res) => {
   pool.query(queries.getDataById, [req.params.id]) .then( result =>{
        return res.status(200).json(result.rows[0])
    })

}

const addKajian_offline = (req, res) => {
    const {judul, pemateri, waktu, tempat, link } = req.body;
    pool.query(queries.insertData, [judul, pemateri, waktu, tempat, link ])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil menambahkan data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addKajian_offline', e)
         return res.status(500).json({
             message: 'Gagal menambahkan data',
         });
     })
 }

 const updateKajian_offline = (req, res) => {
    const {judul, pemateri, waktu, tempat, link, id} = req.body;
    pool.query(queries.updateData, [judul, pemateri, waktu, tempat, link,  id])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mengupdate data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addKajian_offline', e)
         return res.status(500).json({
             message: 'Gagal mengupdate data',
         });
     })
 }

 const deleteKajian_offline = (req, res) => {
    const { id } = req.params;
    pool.query(queries.deleteData, [ parseInt(id)])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil menghapus data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addKajian_offline', e)
         return res.status(500).json({
             message: 'Gagal menghapus data',
         });
     })
 }

module.exports = {
    getKajian_offline,
    getKajian_offlineById,
    addKajian_offline,
    updateKajian_offline,
    deleteKajian_offline,
}