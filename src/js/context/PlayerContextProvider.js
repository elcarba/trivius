import React from 'react';
import PropTypes from 'prop-types';

export const PlayerContext = React.createContext();

export class PlayerContextProvider extends React.Component{
  state = {
    playing: false,
  };

  componentDidUpdate(prevProps){

    if(!this.props.lastRound && prevProps.url !== this.props.url){
      this.audio = new Audio(this.props.url);

      this.audio.play();
    }

    if(this.props.stop){
      this.audio.pause();
    }
  }

  componentDidMount() {
    this.audio = new Audio(this.props.url);
    this.audio.play();
  }

  playerHandler = (remainingTime) => {
    this.setState({
      playing: remainingTime !== 0
    });
  };

  render(){
    return(
      <PlayerContext.Provider value={{
        ...this.state,
        onChange: this.playerHandler
      }}>
        {this.props.children}
      </PlayerContext.Provider>
    );
  }

}

PlayerContextProvider.propTypes = {
  url: PropTypes.string.isRequired,
  stop: PropTypes.bool.isRequired,
  lastRound: PropTypes.bool.isRequired,

};