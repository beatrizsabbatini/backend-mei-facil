module.exports = {
  async show(req, res) {

      const company = {
          mei: '25.258.678/0001-53',
          openingDate: '15/09/2020',
          companyName: `ANA SOUZA BARROS 410.729.308-46`,
          tradingName: 'Ana Souza',
          legalNature: '211-5 - Empresário (Individual)',
          mainActivity: '95.11-8/00-Reparação e manutenção de computadores',
          isActive: true,
          shareCapital: 3000,
          adress: {
            publicPlace: 'Rua Eliodoro do Carmo Silva',
            number: '940',
            complement: 'apt 201',
            zipCode: '35900-197',
            neighborhood: 'Gleba Palhano',
            city: 'Londrina',
            state: 'PR',
          }
        }

    return res.json(company);
  },
};
