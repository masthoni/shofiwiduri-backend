const getData = "SELECT * FROM kajian_online"
const getDataById = "SELECT * FROM kajian_online WHERE id=$1"
const insertData = "INSERT INTO kajian_online (judul, pemateri, link, waktu) VALUES ($1, $2, $3, $4)";
const updateData = "UPDATE kajian_online set judul = $1, pemateri = $2, link= $3, waktu= $4 where id=$5";
const deleteData = "DELETE FROM kajian_online where id=$1";

module.exports = {
    getData,
    getDataById,
    insertData,
    updateData,
    deleteData,

}