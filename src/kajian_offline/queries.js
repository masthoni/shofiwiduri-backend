const getData = "SELECT * FROM kajian_offline"
const getDataById = "SELECT * FROM kajian_offline WHERE id=$1"
const insertData = "INSERT INTO kajian_offline (judul, pemateri, waktu, tempat, link) VALUES ($1, $2, $3, $4, $5)";
const updateData = "UPDATE kajian_offline set judul = $1, pemateri = $2, waktu= $3, tempat= $4, link= $5 where id=$6";
const deleteData = "DELETE FROM kajian_offline where id=$1";

module.exports = {
    getData,
    getDataById,
    insertData,
    updateData,
    deleteData,

}