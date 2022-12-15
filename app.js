const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const cors = require('cors')

app.use(cors())

app.use(express.json())

// menerima req dari postman/rest api software


app.use(express.urlencoded({
    extended:true
}))

const doaRouters = require('./src/doa/routes')

const dzikirRouters = require('./src/dzikir/routes')
const kajian_offlineRouters = require('./src/kajian_offline/routes')
const kajian_onlineRouters = require('./src/kajian_online/routes')
const kategoriRouters = require('./src/kategori/routes')
const postingan_artikelRouters = require('./src/postingan_artikel/routes')
const rangkuman_kajianRouters = require('./src/rangkuman_kajian/routes')
// menerima req, dari nuxt


app.use('/doa', doaRouters)
app.use('/dzikir', dzikirRouters)
app.use('/kajian_offline', kajian_offlineRouters)
app.use('/kajian_online', kajian_onlineRouters)
app.use('/kategori', kategoriRouters)
app.use('/postingan_artikel', postingan_artikelRouters)
app.use('/rangkuman_kajian',rangkuman_kajianRouters)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})