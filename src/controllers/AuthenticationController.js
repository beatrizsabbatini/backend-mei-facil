//index, show, store, update and destroy

const User = require('../models/User');
const bcrypt = require("bcryptjs");
const generateToken = require('../config/generateToken');

module.exports = {
  async store(req, res) {
    const { cpf, password } = req.body;

    const user = await User.findOne({ cpf }).select('+password');

    if (!user)
      return res.status(400).send({message: 'Usuário não encontrado!'});

    if (!await bcrypt.compare(password, user.password))
      return res.status(400).send({message: 'Senha incorreta!'});

    user.password = undefined;

    res.send({ user, token: generateToken({id: user.id}) })
  }
}
