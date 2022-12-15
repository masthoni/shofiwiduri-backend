const getData = "SELECT * FROM doa "
const insertData = "INSERT INTO doa (judul,latin, arti) VALUES ($1, $2, $3)";
const updateData = "UPDATE doa set judul = $1, latin = $2, arti= $3 where id=$4";
const deleteData = "DELETE FROM doa where id=$1";

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData,

}