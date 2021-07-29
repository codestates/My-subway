'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingredients', [
      {
        type_id: 1, //메인메뉴
        name: '페퍼 치킨 슈니첼',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%91%E1%85%A6%E1%84%91%E1%85%A5%E1%84%8E%E1%85%B5%E1%84%8F%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B2%E1%84%82%E1%85%B5%E1%84%8E%E1%85%A6%E1%86%AF.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '스테이크 & 치즈',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3%E1%84%8B%E1%85%A2%E1%86%AB%E1%84%8E%E1%85%B5%E1%84%8C%E1%85%B3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '터키 베이컨 아보카도',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%90%E1%85%A5%E1%84%8F%E1%85%B5%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A9%E1%84%8F%E1%85%A1%E1%84%83%E1%85%A9.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: 'K-바비큐',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/K%E1%84%87%E1%85%A1%E1%84%87%E1%85%B5%E1%84%8F%E1%85%B2.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '로스트 치킨',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%85%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%8E%E1%85%B5%E1%84%8F%E1%85%B5%E1%86%AB.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '로티세리 바비큐 치킨',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%85%E1%85%A9%E1%84%90%E1%85%B5%E1%84%89%E1%85%A6%E1%84%85%E1%85%B5%E1%84%87%E1%85%A1%E1%84%87%E1%85%B5%E1%84%8F%E1%85%B2%E1%84%8E%E1%85%B5%E1%84%8F%E1%85%B5%E1%86%AB.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '풀드 포크 바비큐',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%B3%E1%84%91%E1%85%A9%E1%84%8F%E1%85%B3%E1%84%87%E1%85%A1%E1%84%87%E1%85%B5%E1%84%8F%E1%85%B2.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '써브웨이 클럽',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%89%E1%85%A5%E1%84%87%E1%85%B3%E1%84%8B%E1%85%B0%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%86%B8.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '쉬림프',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%89%E1%85%B1%E1%84%85%E1%85%B5%E1%86%B7%E1%84%91%E1%85%B3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '스파이시 이탈리안',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%89%E1%85%B3%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B5%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A1%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%AB.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '치킨 데리야끼',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%8E%E1%85%B5%E1%84%8F%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A6%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A3%E1%84%81%E1%85%B5.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '비엘티',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%87%E1%85%B5%E1%84%8B%E1%85%A6%E1%86%AF%E1%84%90%E1%85%B5.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '이탈리안비엠티',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A1%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%87%E1%85%B5%E1%84%8B%E1%85%A6%E1%86%B7%E1%84%90%E1%85%B5.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '미트볼',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%86%E1%85%B5%E1%84%90%E1%85%B3%E1%84%87%E1%85%A9%E1%86%AF.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '터키',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%90%E1%85%A5%E1%84%8F%E1%85%B5.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '참치',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%8E%E1%85%A1%E1%86%B7%E1%84%8E%E1%85%B5.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '햄',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%92%E1%85%A2%E1%86%B7.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '에그마요',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%8B%E1%85%A6%E1%84%80%E1%85%B3%E1%84%86%E1%85%A1%E1%84%8B%E1%85%AD.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: '베지',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/main/%E1%84%87%E1%85%A6%E1%84%8C%E1%85%B5.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2, //빵
        name: '화이트',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/bread/%ED%99%94%EC%9D%B4%ED%8A%B8.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        name: '파마산 오레가노',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/bread/%ED%8C%8C%EB%A7%88%EC%82%B0%EC%98%A4%EB%A0%88%EA%B0%80%EB%85%B8.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        name: '위트',
        img_url: 'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/bread/%EC%9C%84%ED%8A%B8.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        name: '허니오트',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/bread/%ED%97%88%EB%8B%88%EC%98%A4%ED%8A%B8.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        name: '하티',
        img_url: 'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/bread/%ED%95%98%ED%8B%B0.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        name: '플랫브레드',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/bread/%ED%94%8C%EB%9E%AB%EB%B8%8C%EB%A0%88%EB%93%9C.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 3, //치즈
        name: '아메리칸치즈',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/cheese/%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B8%EC%B9%98%EC%A6%88.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 3, //치즈
        name: '슈레드치즈',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/cheese/%EC%8A%88%EB%A0%88%EB%93%9C%EC%B9%98%EC%A6%88.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 3, //치즈
        name: '모차렐라치즈',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/cheese/%EB%AA%A8%EC%B0%A8%EB%A0%90%EB%9D%BC%EC%B9%98%EC%A6%88.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 3, //치즈
        name: '치즈 제외',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/cheese/%EC%B9%98%EC%A6%88%EC%A0%9C%EC%99%B8.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 4, //야채
        name: '양상추',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/vege/%EC%96%91%EC%83%81%EC%B6%94.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 4, //야채
        name: '토마토',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/vege/%ED%86%A0%EB%A7%88%ED%86%A0.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 4, //야채
        name: '오이',
        img_url: 'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/vege/%EC%98%A4%EC%9D%B4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 4, //야채
        name: '피망',
        img_url: 'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/vege/%ED%94%BC%EB%A7%9D.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 4, //야채
        name: '양파',
        img_url: 'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/vege/%EC%96%91%ED%8C%8C.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 4, //야채
        name: '피클',
        img_url: 'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/vege/%ED%94%BC%ED%81%B4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 4, //야채
        name: '올리브',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/vege/%EC%98%AC%EB%A6%AC%EB%B8%8C.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 4, //야채
        name: '할라피뇨',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/vege/%ED%95%A0%EB%9D%BC%ED%94%BC%EB%87%A8.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '머스타드',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%EB%A8%B8%EC%8A%A4%ED%83%80%EB%93%9C.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '레드와인식초',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%EB%A0%88%EB%93%9C%EC%99%80%EC%9D%B8%EC%8B%9D%EC%B4%88.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '스위터 어니언',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%EC%8A%A4%EC%9C%84%ED%8A%B8%EC%96%B4%EB%8B%88%EC%96%B8.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '허니 머스타드',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%ED%97%88%EB%8B%88%EB%A8%B8%EC%8A%A4%ED%83%80%EB%93%9C.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '스위트 칠리',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%EC%8A%A4%EC%9C%84%ED%8A%B8%EC%B9%A0%EB%A6%AC.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '스모크 바비큐',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%EC%8A%A4%EB%AA%A8%ED%81%AC%EB%B0%94%EB%B2%A0%ED%81%90.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '랜치',
        img_url: 'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%EB%A0%8C%EC%B9%98.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '마요네즈',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%EB%A7%88%EC%9A%94%EB%84%A4%EC%A6%88.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '핫 칠리',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%ED%95%AB%EC%B9%A0%EB%A6%AC.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '사우스 웨스트 치폴레',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%EC%82%AC%EC%9A%B0%EC%8A%A4%EC%9B%A8%EC%8A%A4%ED%8A%B8%EC%B9%98%ED%94%8C%EB%A0%88.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '홀스래디쉬',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%ED%99%80%EC%8A%A4%EB%9E%98%EB%94%94%EC%89%AC.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '올리브 오일',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%A4%EC%9D%BC.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '소금',
        img_url: 'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%EC%86%8C%EA%B8%88.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5, //소스
        name: '후추',
        img_url: 'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/sauce/%ED%9B%84%EC%B6%94.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 6, //추가 선택
        name: '에그마요',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/addable/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94(%EC%B6%94%EA%B0%80).png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 6, //추가 선택
        name: '페퍼로니',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/addable/%ED%8E%98%ED%8D%BC%EB%A1%9C%EB%8B%88(%EC%B6%94%EA%B0%80).png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 6, //추가 선택
        name: '베이컨',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/addable/%EB%B2%A0%EC%9D%B4%EC%BB%A8(%EC%B6%94%EA%B0%80).png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 6, //추가 선택
        name: '아보카도',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/addable/%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84(%EC%B6%94%EA%B0%80).png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 6, //추가 선택
        name: '오믈렛',
        img_url:
          'https://my-subway-resources.s3.ap-northeast-2.amazonaws.com/images/addable/%EC%98%A4%EB%AF%88%EB%A0%9B(%EC%B6%94%EA%B0%80).png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 7, //미트 추가
        name: '풀드포크',
        img_url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 7, //미트 추가
        name: '햄',
        img_url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 7, //미트 추가
        name: '참치',
        img_url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 7, //미트 추가
        name: '미트볼',
        img_url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 7, //미트 추가
        name: '비엘티',
        img_url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 7, //미트 추가
        name: '이탈리안 비엠티',
        img_url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 7, //미트 추가
        name: '터키',
        img_url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 7, //미트 추가
        name: '써브웨이 클럽',
        img_url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 7, //미트 추가
        name: '치킨 데리야끼',
        img_url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 7, //미트 추가
        name: '스파이시 이탈리안',
        img_url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 7, //미트 추가
        name: '쉬림프',
        img_url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 7, //미트 추가
        name: '페퍼 치킨 슈니첼',
        img_url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ingredients', null, {});
  },
};
