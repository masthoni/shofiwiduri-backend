const pool = require("../../config/db")
const queries = require("./queries");

const getKajian_online = (req, res) => {
   pool.query(queries.getData) .then( result =>{
        return res.status(200).json(result.rows)
    })

}
const getKajian_onlineById = (req, res) => {
   pool.query(queries.getDataById, [req.params.id]) .then( result =>{
        return res.status(200).json(result.rows[0])
    })

}

const addKajian_online = (req, res) => {
    const {judul, pemateri, link, waktu} = req.body;
    pool.query(queries.insertData, [judul, pemateri, link, waktu])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mendapatkan data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addKajian_online', e)
         return res.status(500).json({
             message: 'Gagal menambahkan data',
         });
     })
 }

 const updateKajian_online = (req, res) => {
    const {judul, pemateri, link, waktu, id} = req.body;
    pool.query(queries.updateData, [judul, pemateri, link, waktu, id])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil mengupdate data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addKajian_online', e)
         return res.status(500).json({
             message: 'Gagal mengupdate data',
         });
     })
 }

 const deleteKajian_online = (req, res) => {
    const { id } = req.params;
    pool.query(queries.deleteData, [ parseInt(id)])
    .then( result =>{
        return res.status(200).json({
            message: 'Berhasil menghapus data',
        });
       
            //  return res.status(200).json(result.rows)
     })
     .catch( e => {
         console.log('error addKajian_online', e)
         return res.status(500).json({
             message: 'Gagal menghapus data',
         });
     })
 }

module.exports = {
    getKajian_online,
    getKajian_onlineById,
    addKajian_online,
    updateKajian_online,
    deleteKajian_online,
}