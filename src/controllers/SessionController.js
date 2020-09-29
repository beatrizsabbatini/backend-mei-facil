const generateToken = require('../config/generateToken');
//index, show, store, update and destroy

const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { cpf, password } = req.body;

    let user = await User.findOne({ cpf });

    if (!user) {
      user = await User.create({
        cpf,
        password,
        personalData: {
          name: 'Ana Souza Barros',
          phoneNumber: '(31) 2528-2471',
          dateOfBirth: '11/05/1973',
          email: 'ana.souza.barros@armyspy.com',
          rg: '10.951.503-1',
          adress: {
            publicPlace: 'Rua Eliodoro do Carmo Silva',
            number: '940',
            complement: 'apt 201',
            zipCode: '35900-197',
            neighborhood: 'Gleba Palhano',
            city: 'Londrina',
            state: 'PR',
          },
        },
      });
    } else {
      return res.status(400).json({ message: 'Usuário já cadastrado!' });
    }

    return res.json({user, token: generateToken({id: user.id})});
  },
};
