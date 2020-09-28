'use strict'

const mysql = require("mysql")

const conn =  mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "riset_crud_api_express"
})

conn.connect(err=>{
  if(err) throw err
  
  console.log('Database konek')
})

module.exports = conn

