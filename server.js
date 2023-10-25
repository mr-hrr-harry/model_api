const express = require('express')
require('dotenv').config()
require('./database_driver/db_connect.js')

const app = express()

app.use(express.json())

app.use('/api/userdata/mongodb', require('./router/router.js'))

port = process.env.PORT 
app.listen(port, () => {
    console.log(`Server is up and listening!`)
})