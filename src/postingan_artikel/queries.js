const getData = "SELECT a.*, b.kategori as nama_kategori FROM postingan_artikel a, kategori b Where a.kategori = b.id"
const getDataByKategori = "SELECT a.*, b.kategori as nama_kategori FROM postingan_artikel a, kategori b Where a.kategori=$1 AND a.kategori = b.id"
const insertData = "INSERT INTO postingan_artikel (judul, isi, kategori, gambar) VALUES ($1, $2, $3, $4)";
const updateData = "UPDATE postingan_artikel set judul = $1, isi = $2, kategori = $3, gambar = $4 where id=$5";
const deleteData = "DELETE FROM postingan_artikel where id=$1";

module.exports = {
    getData,
    getDataByKategori,
    insertData,
    updateData,
    deleteData,

}