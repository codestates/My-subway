const { user } = require('../../models');
const { generateAccessToken, isAuthorized } = require('../tokenFunctions');

module.exports = {
  get: (req, res) => {
    if (req.query.email || req.query.username) {
      //파라미터가 있을때(상현)
      let findKey, findname;
      if (req.query.email) {
        findkey = 'email';
        findname = req.query.email;
      }
      if (req.query.username) {
        findkey = 'username';
        findname = req.query.username;
      }
      user
        .findOne({
          where: {
            [findkey]: findname,
          },
        })
        .then((data) => {
          if (!data) {
            return res.status(200).json({
              message: 'ok',
            });
          }
          return res.status(409).json({
            message: '요청하신 정보는 이미 사용중입니다.',
          });
        });
    } else {
      //파라미터가 없을때 (상현)
      let userInfo = isAuthorized(req);
      if (userInfo) {
        let { email, username } = userInfo;
        return res.json({
          data: {
            email,
            username,
          },
          message: 'ok',
        });
      } else
        return res.json({
          message: 'User not found',
        });
    }
  },
  put: (req, res) => {
    // 이부분 api설명서 살짝 수정해야함 (상현)
    let userInfo = isAuthorized(req);
    let { id } = userInfo;
    let changeUsername = req.body.username;
    user
      .findOne({
        where: {
          username: changeUsername,
        },
      })
      .then((data) => {
        if (!data) {
          user.update(
            {
              username: changeUsername,
            },
            {
              where: {
                id,
              },
            },
          );
          return res.status(200).json({
            message: 'ok',
          });
        } else
          return res.status(409).json({
            message: '요청하신 정보는 이미 사용중입니다.',
          });
      });
  },

  delete: (req, res) => {
    let userInfo = isAuthorized(req);
    if (userInfo) {
      let { id } = userInfo;
      user
        .destroy({
          where: {
            id,
          },
        })
        .then((del) => {
          res.cookie('jwt', '', {
            httpOnly: true,
            maxAge: 1,
          });
          return res.status(200).json({
            message: 'ok',
          });
        })
        .catch((err) => console.error(err));
    } else
      return res.status(401).json({
        message: 'Unauthorized request',
      });
  },
};
