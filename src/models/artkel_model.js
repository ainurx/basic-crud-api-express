'use strict'

const conn = require("../../config/database")

const Artikel = function(artikel){
  this.judul = artikel.judul
  this.deskripsi = artikel.deskripsi
}

Artikel.findAll = result=>{
  conn.query("SELECT * FROM artikel", (err, res)=>{
    if(err){
      console.log(`error ${err}`)
      result(null, err)
    }
    else{
      result(null, res)
    }
  })
}

module.exports = Artikel