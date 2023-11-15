const Users = require("../models/user.model");
const uuid = require("uuid");
const { hashPassword }=require("../utils/crypto")

const findAllUsers=async()=>{
  const allUsers = Users.findAll()
  return allUsers
}

const findUserById = async (id) => {
  const data = await Users.findOne({
    where: { id: id },
  });
  return data;
};

const findUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: {
      email: email,
    },
  });
  return data;
};

const createUser = async (userObject) => {
  const newUser = {
    id: uuid.v4(),
    firstName: userObject.firstName,
    lastName: userObject.lastName,
    email: userObject.email,
    profileImg:userObject.profileImg,
    password:hashPassword(userObject.password)
  };
  const data = await Users.create(newUser);
  return data;
};

const updateUser = async (id, userObj) => {
  const selectedUser = await Users.findOne({
    where: {
      id: id,
    },
  });

  if (!selectedUser) return null;

  const modifiedUser = await selectedUser.update(userObj);
  return modifiedUser;
};

const deleteUser = async (id) => {
  const user = await Users.destroy({
    where: {
      id: id,
    },
  });
  return user; // 1 || 0
};

module.exports = {
  findAllUsers,
  createUser,
  updateUser,
  findUserById,
  deleteUser,
  findUserByEmail,
};
