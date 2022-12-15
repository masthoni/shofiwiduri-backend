const getData = "SELECT * FROM dzikir"
const insertData = "INSERT INTO dzikir (latin, arti, cara, manfaat) VALUES ($1, $2, $3, $4)";
const updateData = "UPDATE dzikir set latin = $1, arti = $2, cara= $3, manfaat =$4 where id=$5";
const deleteData = "DELETE FROM dzikir where id=$1";

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData,

}