const { userService } = require("../services/user.service");

const getAll = async (req, res) => {
  const users = await userService.getAll();
  res.send(users);
};

const create = async (req, res) => {
  const newUser = await userService.create(req.body);
  res.send(newUser);
};

const update = async (req, res) => {
  const id = req.params.id;
  const updatedUser = await userService.update(id, req.body);
  res.send(updatedUser);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const updatedUser = await userService.deleteUser(id);
  res.send(updatedUser);
};

const getUser = async (req, res) => {
  const id = req.params.id;
  const users = await userService.getUser(id);

  res.send(users.rows);
};

module.exports = {
  userControllers: {
    getAll,
    create,
    update,
    deleteUser,
    getUser,
  },
};
