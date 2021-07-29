const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = (req, res) => {
  let loginInfo = req.body;
  let { email, password } = loginInfo;

  user
    .findOne({
      where: {
        email,
        password,
      },
    })
    .then((data) => {
      if (!data) {
        return res.status(404).send('invalid user');
      }
      delete data.dataValues.password;
      const accessToken = generateAccessToken(data.dataValues);
      sendAccessToken(res, accessToken);
    })
    .catch((err) => {
      console.log(err);
    });
};
