const getData = "SELECT * FROM transaksi t where t.category='2'";
const insertData = "INSERT INTO transaksi (title, amount, category) VALUES ($1, $2, '2')";
const updateData = "UPDATE transaksi set title = $1, amount = $2, input_time=now() where id=$3";
const deleteData = "DELETE FROM transaksi where id=$1";
const sumData = "SELECT SUM (t.amount) From transaksi t where t.category='2'";

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData,
    sumData
}


// native query     ... note aja semakin kebawah semakin berat untuk server
// query builder knex.js
// orm sequalize
