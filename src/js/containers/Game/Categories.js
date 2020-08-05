import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Button from '../../components/UI/Button';
import Vicoin from '../../components/Vicoin/Vicoin';
import PadLockImg from '../../../assets/images/lock.png';
import GameHeaderLayout from '../../components/Layout/GameHeaderLayout';
import GameLayout from '../../components/Layout/GameLayout';
import LoaderContainer from '../../hoc/LoaderContainer';
import Modal from '../../components/UI/Modal';
import vicoinsImg from '../../../assets/images/vicoins.png';
import * as categoriesActions from '../../store/Categories/categoriesActions';
import * as userActions from '../../store/User/userActions';

const header = (totalPoints, totalCoins) => (
  <GameHeaderLayout
    leftSideTop={
      <span>{totalPoints} pts</span>
    }
    mainTop={
      <span>Categories</span>
    }
    rightSideTop={
      <Vicoin qty={totalCoins}/>
    }
  />
);

const body = (categories, handleClickCategory, categorySel, modalIsOpen, handleCatModal,
              shoppingCat, userTotalCoins, onDecreaseCoins) => {
  const handleOnCategory = (category) => {
    if(category.enabled)
      handleClickCategory(categories, category.id);
    else
      handleCatModal(category, true);
  };

  const closeModal = () => {
    setTimeout(function(){ handleCatModal({}, false) }, 500);
  };

  const handleBuyCategory = () => {
    onDecreaseCoins(shoppingCat.price);
  };

  return(
    <Row>
      <Modal
        open={modalIsOpen}
        actionButton={{ label: 'Buy it!', onClick: handleBuyCategory}}
        closeButton={{ onClick: closeModal }}
        content={{
          notice: `Do you want to buy category: ${shoppingCat.name}?`,
          itemText: `Price: ${shoppingCat.price}`,
          item: <img width={30} src={vicoinsImg} />
        }}
      />

      <Col sm="12" md="6" className="offset-md-3 mt-3">

        {
          categories.map((category, i) => {

            return (
              <Button
                key={i}
                handleClick={() => handleOnCategory(category)}
                color={`cat${categorySel === category.id ? '-active':''}`}
                styles={{backgroundColor: category.color}}
                size="lg"
                block
                disabled={category.price > userTotalCoins}
              >

                {
                  !category.enabled ? <img className="padlock" src={PadLockImg} alt="padlock"/>: null
                }

                <img className="cat-img" src={category.img} alt={`cat-${category.name}`} />
                <span className="cat-name">
                  {category.name}
                </span>

                {
                  !category.enabled ? <Vicoin qty={category.price} /> :null
                }

              </Button>
            );

          })
        }

      </Col>
    </Row>
  );
};

const footer = (currCatId, onPlay) => {
  return(
    currCatId ?
      <Button
        handleClick={ () => onPlay() }
        color="cat-play"
        size="lg"
        block
      >
        Play
      </Button> : null
  );
};


class categories extends Component {
  state = {
    modalIsOpen: false,
    shoppingCat: {}
  };

  handleModal = (category, isOpen) => {
   this.setState({
     modalIsOpen: isOpen,
     shoppingCat: category
   });
  };

  componentDidMount(){
    if(!this.props.categories.length)
      this.props.fetchData();
  }

  render(){
    const { modalIsOpen, shoppingCat } = this.state;
    const { currentUser, categories, currentCategory, onChangeCategory, onPlay, isLoading, decreaseCoins } = this.props;
    const { totalCoins, totalPoints } = currentUser;
    const currentCatId = currentCategory && currentCategory.hasOwnProperty("id") ? currentCategory.id : null;

    return(
      <LoaderContainer isLoading={isLoading}>
        <GameLayout
          clsName={"categories-container"}
          header={header(totalPoints, totalCoins)}
          body={
            body(
              categories, onChangeCategory, currentCatId, modalIsOpen,
              this.handleModal, shoppingCat, totalCoins, decreaseCoins
            )
          }
          footer={footer(currentCatId, onPlay)}
        />
      </LoaderContainer>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.categoriesReducer.isLoading,
  categories: state.categoriesReducer.categories,
  currentUser: state.userReducer.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(categoriesActions.fetchCategories()),
  decreaseCoins: (coins) => dispatch(userActions.decreaseCoins(coins)),
});

categories.propTypes = {
  onPlay: PropTypes.func.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  currentCategory: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(categories);