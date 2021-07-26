const { like } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');
module.exports = {
  post: (req, res) => {
    let post_id = req.body.post_id;
    let userInfo = isAuthorized(req);

    //로그인 상태일때
    if (userInfo) {
      //post_id와 user_id로 likes table에 레코드 추가
      like.create({ post_id, user_id: userInfo.id });
      res.status(201).json({ message: 'ok' });
    } else {
      res.status(401).json({ message: 'Unauthorized request' });
    }
  },
  delete: (req, res) => {
    let post_id = Number(req.params.id);
    let userInfo = isAuthorized(req);
    //로그인 상태일 때
    if (userInfo) {
      //post id에 해당하는 포스트에 대한 user의 좋아요를 취소
      like.destroy({
        where: {
          user_id: userInfo.id,
          post_id,
        },
      });
      res.status(200).json({ message: 'ok' });
    } else {
      res.status(401).json({ message: 'Unauthorized request' });
    }
  },
};
