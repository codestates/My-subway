import React, { useState, useEffect } from 'react';
import RadioMenu from '../components/RadioMenu';
import CheckMenu from '../components/CheckMenu';
import axios from 'axios';

function Postpage() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [allMenu, setAllMenu] = useState(null);

  useEffect(async () => {
    const data = await axios.get('https://api.mysubway.ml/menu').then((result) => {
      const arr = [];
      const name = Object.keys(result.data.data);
      const value = Object.values(result.data.data);

      for (let i = 0; i < name.length; i++) {
        arr.push({ [name[i]]: value[i] });
      }
      return arr;
    });
    setAllMenu(data);
  }, []);

  const handleRadio = (item) => {
    const name = checkedItems.map((el) => el.name);
    if (!name.includes(item.name)) {
      let data = item;
      setCheckedItems([...checkedItems, data]);
    } else {
      for (let i = 0; i < checkedItems.length; i++) {
        if (checkedItems[i].name === item.name) {
          let newData = [
            ...checkedItems.slice(0, i),
            { ...checkedItems[i], id: item.id },
            ...checkedItems.slice(i + 1),
          ];
          setCheckedItems(newData);
        }
      }
    }
  };

  const handleCheckBox = (checked, item) => {
    if (checked) {
      const name = checkedItems.map((el) => el.name);
      if (!name.includes(item.name)) {
        setCheckedItems([...checkedItems, item]);
      } else {
        for (let i = 0; i < checkedItems.length; i++) {
          if (checkedItems[i].name === item.name) {
            checkedItems[i].id.push(item.id[0]);
          }
        }
      }
    } else {
      for (let i = 0; i < checkedItems.length; i++) {
        if (checkedItems[i].name === item.name) {
          let newData = checkedItems[i].id.filter((el) => el !== item.id[0]);
          checkedItems[i].id = newData;
        }
      }
    }
  };

  return (
    allMenu && (
      <div>
        {allMenu.map((el) => {
          const name = Object.keys(el)[0];
          return name === 'main' || name === 'bread' || name === 'cheese' ? (
            <div>
              <h3>{name}</h3>
              <hr></hr>
              <RadioMenu data={el} handleRadio={handleRadio} />
            </div>
          ) : (
            <div>
              <h3>{name}</h3>
              <hr></hr>
              <CheckMenu data={el} handleCheckBox={handleCheckBox} />
            </div>
          );
        })}
      </div>
    )
  );
}

export default Postpage;
