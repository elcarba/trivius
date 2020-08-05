import React from 'react';
import PropTypes from 'prop-types';

const gameHeaderLayout = (props) => (
    <div className="header-container">

      {
        (props.leftSideTop || props.leftSideBottom) ?
          (
            <div className="left-side">

              { props.leftSideTop ? <div className="top">{props.leftSideTop}</div> :null}

              { props.leftSideBottom ? <div className="bottom">{props.leftSideBottom}</div> :null}

            </div>
          ):null
      }


      {
        (props.mainTop || props.mainBottom) ?
          (
            <div className="main">

              { props.mainTop ? <div className="top">{props.mainTop}</div> :null}

              { props.mainBottom ? <div className="bottom">{props.mainBottom}</div> :null}

            </div>
          ):null
      }


      {
        (props.rightSideTop || props.rightSideBottom) ?
          (
            <div className="right-side">

              { props.rightSideTop ? <div className="top">{props.rightSideTop}</div> :null}

              { props.rightSideBottom ? <div className="bottom">{props.rightSideBottom}</div> :null}

            </div>
          ):null
      }

    </div>
);

gameHeaderLayout.propTypes = {
  leftSideTop: PropTypes.node,
  leftSideBottom: PropTypes.node,
  rightSideTop: PropTypes.node,
  rightSideBottom: PropTypes.node,
  mainTop: PropTypes.node,
  mainBottom: PropTypes.node,
};

export default gameHeaderLayout;