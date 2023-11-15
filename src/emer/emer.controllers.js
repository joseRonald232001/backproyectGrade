const Emer = require("../models/emer.model");

const findEmerById = async (id) => {
    const data = await Emer.findOne({
      where: { id: id },
    });
    return data;
  };
  const createEmer = async (emerObject) => {
    const newEmer = {
      name:emerObject.name,
      status:emerObject.status
    };
    const data = await Emer.create(newEmer);
    return data;
  };

  const updateEmer=async(id,emerObj)=>{
    const selectedEmer= await Emer.findOne({
      where:{
        id:id
      }
    });

   if(!selectedEmer)return null;
    const modifiedEmer =await selectedEmer.update(emerObj);
    return modifiedEmer;
  }

  
  
module.exports = {
    findEmerById,
    createEmer,
    updateEmer
};
