const { ingredient, ingredientType } = require('../../models');
module.exports = async (req, res) => {
  //데이터베이스에서 모든 메뉴 목록 받아오기
  let menuInfo = await ingredient.findAll({ include: [ingredientType] });

  //api형식에 맞춘 initial structure
  const responseData = {
    main: [],
    bread: [],
    cheese: [],
    vege: [],
    sauce: [],
    addable: [],
    addmeat: [],
  };
  //api형식에 맞게 쿼리 결과를 가공
  menuInfo.forEach((item) => {
    switch (item.ingredientType.name) {
      case 'main':
        responseData.main.push({
          id: item.id,
          name: item.name,
          img_url: item.img_url,
        });
        break;
      case 'bread':
        responseData.bread.push({
          id: item.id,
          name: item.name,
          img_url: item.img_url,
        });
        break;
      case 'cheese':
        responseData.cheese.push({
          id: item.id,
          name: item.name,
          img_url: item.img_url,
        });
        break;
      case 'vege':
        responseData.vege.push({
          id: item.id,
          name: item.name,
          img_url: item.img_url,
        });
        break;
      case 'sauce':
        responseData.sauce.push({
          id: item.id,
          name: item.name,
          img_url: item.img_url,
        });
        break;
      case 'addable':
        responseData.addable.push({
          id: item.id,
          name: item.name,
          img_url: item.img_url,
        });
        break;
      case 'addmeat':
        responseData.addmeat.push({
          id: item.id,
          name: item.name,
          img_url: item.img_url,
        });
        break;
      default:
        console.log('unhandled type');
    }
  }, responseData);

  //가공된 결과를 200 ok와 함께 전송
  res.status(200).json({ data: responseData, message: 'ok' });
};
