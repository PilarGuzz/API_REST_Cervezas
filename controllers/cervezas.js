const db = require('../models/db')

function getBeers(req, res){
    res.json(db.cervezas.find())
}

function getBeer(req, res){
    res.json(db.cervezas.find(req.body))
}

function addBeer(req, res){
  
  const cerveza = db.cervezas.save(req.body);
      
  res.json(cerveza);
}

function deleteBeer(req, res){
    let beerId = req.params.id
    db.cervezas.remove({ id: beerId });
    res.json(db.cervezas.find()); 
}

function editBeer(req, res){
  const beerId = req.params.id;
  
  console.log("Editing item: ", beerId, " to be ", req.body);

  db.cervezas.update({ id: beerId }, req.body);

  res.json(db.cervezas.find());
}

module.exports = { getBeers, getBeer, addBeer, deleteBeer, editBeer}