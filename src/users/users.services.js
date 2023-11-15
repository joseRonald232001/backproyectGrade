const userController = require("./users.controllers");

const getAllUsers = (req, res) => {
  userController.findAllUsers().then((data) => {
    res.status(200).json(data);
  });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  userController
    .findUserById(id)
    .then((data) => {
      //? En caso de que data no exista (el usuario no exista)
      if (!data) {
        return res
          .status(404)
          .json({ message: `User with id: ${id}, not found` });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });
};

const postNewUser = (req, res) => {
  const userObj = req.body;
  userController
    .createUser(userObj)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((e) => {
      res.status(404).json({ message: "Error al crear usuario.", e });
    });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const userObj = req.body;

  userController
    .updateUser(id, userObj)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Invalid ID" });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  userController
    .deleteUser(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Invalid ID" });
      }
      res.status(204).json();
    })

    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });
};

const getMyUser = (req, res) => {
  const user = req.user;
  res.status(200).json(user);
};

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  postNewUser,
  getMyUser,
};
