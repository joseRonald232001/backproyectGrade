const emerController = require("./emer.controllers");

const findEmerById = (req, res) => {
  const id = req.params.id;
  emerController
    .findEmerById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const postNewEmer = (req, res) => {
  const emer = req.body;
  emerController
    .createEmer(emer)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(404).json(error.message);
    });
};

const patchEmer = (req,res)=>{
  const id=req.params.id;
  const emerObj=req.body;
  emerController.updateEmer(id,emerObj)
  .then((data)=>{
    if(!data){
      return res.status(404).json({message:"invalid id"})
    }
    res.status(200).json(data);
  }
  )
  .catch((error)=>{
    res.status(400).json({message:"bad reques",error})
  })
}


module.exports = {
  findEmerById,
  postNewEmer,
  patchEmer
};
