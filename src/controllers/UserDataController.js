const User = require('../models/User');

module.exports = {
  async show(req, res) {
    const { cpf } = req.query;

    let user = await User.findOne({ cpf });

    if (user) {

      user = {
          name: 'Ana Souza Barros',
          phoneNumber: '(31) 2528-2471',
          dateOfBirth: '11/05/1993',
          email: 'ana.souza.barros@armyspy.com',
          rg: '10.951.503-1',
          cpf: cpf,
          adress: {
            publicPlace: 'Rua Eliodoro do Carmo Silva',
            number: '940',
            complement: 'apt 201',
            zipCode: '35900-197',
            neighborhood: 'Gleba Palhano',
            city: 'Londrina',
            state: 'PR',
          },
        }
        
    } else {
      return res
        .status(400)
        .json({ message: 'Usuário inválido, tente com outro CPF!' });
    }

    return res.json(user);
  },
};
