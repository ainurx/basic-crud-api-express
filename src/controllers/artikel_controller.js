'use strict'

const Artikel = require('../models/artkel_model')

exports.findAll = (req, res)=>{
  Artikel.findAll((err, artikel)=>{
    if(err) res.send(err)
    res.send(artikel)
  })
}