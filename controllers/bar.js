const db = require('../models/db')

function getBares(req, res){
    res.json(db.bares.find())
  }

function getBar(req, res){
  const barId = req.params.id;
  const bar = db.bares.find({ id: barId });
  if (bar.length) {
     res.json(bar);
  } else {
     res.json({ message: `item ${barId} doesn't exist` })
  }
}
  
  function addBar(req, res){
     
      const bar = db.bares.save(req.body)
      res.json(bar);
  }
  
  function deleteBar(req, res) {
      let barid = req.params.id
      db.bares.remove({ id: barid });
      
      res.json(db.bares.find());  
    }

    function editBar(req, res){
      const barid = req.params.id;
      const item = req.body;
      console.log("Editing item: ", barid, " to be ", item);
   
      db.bares.update({ id: barid }, item);
   
      res.json(db.bares.find());
   
  }
  
  module.exports = { getBares, getBar, addBar, deleteBar, editBar}