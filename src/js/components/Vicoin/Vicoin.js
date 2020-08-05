import React from 'react';
import PropTypes from 'prop-types';
import viCoinImg from '../../../assets/images/vicoins.png';
import Counter from '../Counter/Counter';

const viCoin = props => (
  <div className="vi-container">
    {
      props.animation ?
        <Counter speed={10} animation={props.animation} value={props.qty} />
        :
        <span> {props.qty} </span>
    }

    <div className="vicoin">
      <img src={viCoinImg} alt="vicoin" className="img-fluid" />
    </div>
  </div>
);

viCoin.propTypes = {
  qty: PropTypes.number,
  animation: PropTypes.number
};

export default viCoin;