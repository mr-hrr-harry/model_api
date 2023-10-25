const mongoose = require('mongoose')

const url = process.env.db_url

mongoose.connect(url, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

const con = mongoose.connection

con.on('open', ()=>{
    console.log('Database reachable!')
})