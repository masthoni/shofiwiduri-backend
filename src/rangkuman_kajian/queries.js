const getData = "SELECT * From rangkuman_kajian"
const insertData = "INSERT INTO rangkuman_kajian(judul, keterangan, lampiran, kategori,id_kajian) VALUES ($1, $2, $3, $4, $5)";
const updateData = "UPDATE rangkuman_kajian set judul = $1, keterangan = $2, lampiran= $3, kategori= $4, id_kajian =$5 where id=$6";
const deleteData = "DELETE FROM rangkuman_kajian where id=$1";

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData,

}