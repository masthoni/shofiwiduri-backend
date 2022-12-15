const getData = "SELECT * FROM kategori";
const insertData = "INSERT INTO kategori (kategori) VALUES ($1)";
const updateData = "UPDATE kategori set kategori = $1 where id=$2";
const deleteData = "DELETE FROM kategori where id=$1";

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData,

}