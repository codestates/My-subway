const axios = require('axios');
axios.defaults.withCredentials = true;
const { user } = require('../../models');
const { generateAccessToken, getKakaoToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  let kakaoTokenPromise = getKakaoToken(req);
  let kakaoToken = await kakaoTokenPromise;
  // 받아온 토큰으로 카카오에게 유저정보 요청
  let userdata = await axios
    .get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        'Content-type': `application/x-www-form-urlencoded;charset=utf-8`,
        Authorization: `Bearer ${kakaoToken.data.access_token}`,
      },
    })
    .catch((err) => console.log(err));

  // 받아온 유저정보를 가공하여 우리꺼로 회원가입 혹은 로그인. 일단 닉네임에 소셜id를 추가하여 중복을 방지했음.
  if (userdata) {
    let userInfo = {
      email: userdata.data.kakao_account.email,
      password: '',
      username: userdata.data.properties.nickname + String(userdata.data.id),
      provider: 'kakao=' + String(userdata.data.id),
    };
    let { email, password, username, provider } = userInfo;

    // status코드로 회원가입과 로그인을 구별
    user
      .findOrCreate({
        where: {
          email,
          provider,
        },
        defaults: {
          password,
          username,
        },
      })
      .then(([user, created]) => {
        delete user.dataValues.password;
        let token = generateAccessToken(user.dataValues);
        res.cookie('jwt', token, { httpOnly: true });
        if (!created) {
          return res.status(200).json({ message: '기존에 있던 회원로그인' });
        }
        return res.status(201).json({ message: '회원가입 되었습니다' });
      });
  }

  //  카카오에서 정보를 받아왔을때 데이터목업

  //   data: {
  //     id: 1820851865,
  //     connected_at: '2021-07-24T20:06:36Z',
  //     properties: { nickname: '박상현' },
  //     kakao_account: {
  //       profile_nickname_needs_agreement: false,
  //       profile: [Object],
  //       has_email: true,
  //       email_needs_agreement: false,
  //       is_email_valid: true,
  //       is_email_verified: true,
  //       email: 'shpk@naver.com'
  //     }
  //   }
};
