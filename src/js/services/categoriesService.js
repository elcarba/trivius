import axios from 'axios';

import PopCatImg from '../../assets/images/categories/pop.png';
import CountryCatImg from '../../assets/images/categories/country.png';
import ElectroCatImg from '../../assets/images/categories/electro.png';
import HipHopCatImg from '../../assets/images/categories/hip-hop.png';
import RomanceCatImg from '../../assets/images/categories/romance.png';
import RockCatImg from '../../assets/images/categories/rock.png';

function getCategories() {

  return axios.get(`https://forkify-api.herokuapp.com/api/get?rId=47746`) //, { user }
    .then(res => {
      console.log("res data", res);

      return [
        {
          id: 1,
          name: 'Rock',
          img: RockCatImg,
          color: '#626a71',
          price: 0,

          //TODO: THIS will be comming in the user STATE, merge array
          enabled: true,
        },
        {
          id: 2,
          name: 'Pop',
          img: PopCatImg,
          color: '#5e7ac9',
          price: 0,

          enabled: true
        },
        {
          id: 3,
          name: 'Romance',
          img: RomanceCatImg,
          color: '#f59b97',
          price: 100,

          enabled: false
        },
        {
          id: 4,
          name: 'Country',
          img: CountryCatImg,
          color: '#bda98a',
          price: 80,

          enabled: false
        },
        {
          id: 5,
          name: 'Electronic',
          img: ElectroCatImg,
          color: '#61bf9c',
          price: 150,

          enabled: false
        },
        {
          id: 6,
          name: 'Hip-Hop',
          img: HipHopCatImg,
          color: '#b3b1a4',
          price: 120,

          enabled: false
        }
      ];

  });
}

export const categoriesService = {
  getCategories,
};