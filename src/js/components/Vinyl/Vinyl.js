import React, { useContext } from 'react';
import vinylImg from '../../../assets/images/vinyl.png';
import { PlayerContext } from '../../context/PlayerContextProvider';


const vinyl = props => {
  const playerContext = useContext(PlayerContext);

  return(
    <div className={`vinyl${playerContext.playing ? '-animated': ''}`}>
      <img src={vinylImg} alt="vinyl" className="img-fluid" />
    </div>
  );
};

export default vinyl;