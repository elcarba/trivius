import React, {useState, useEffect} from 'react';
import vicoinsImg from '../../../assets/images/vicoins.png';
import seagullImg from '../../../assets/images/seagull.png';
import signImg from '../../../assets/images/sign.png';
import Modal from '../UI/Modal';
import { useDispatch } from 'react-redux';
import { increaseCoins } from '../../store/User/userActions';

const returnImgBySlug = (slug) => {
  return slug === 'vicoins' && <img className="coins" src={vicoinsImg} />;
};

const prizes = [
  {
    slug: 'vicoins',
    value: 80,
    pos: 'degr <= 324',
    img: returnImgBySlug('vicoins')
  },
  {
    slug: 'vicoins',
    value: 5,
    pos: 'degr <= 278',
    img: returnImgBySlug('vicoins')
  },
  {
    slug: 'vicoins',
    value: 1,
    pos: 'degr <= 241',
    img: returnImgBySlug('vicoins')
  },
  {
    slug: 'vicoins',
    value: 20,
    pos: 'degr <= 208',
    img: returnImgBySlug('vicoins')
  },
  {
    slug: 'vicoins',
    value: 1,
    pos: 'degr <= 171',
    img: returnImgBySlug('vicoins')
  },
  {
    slug: 'vicoins',
    value: 15,
    pos: 'degr <= 129',
    img: returnImgBySlug('vicoins')
  },
  {
    slug: 'vicoins',
    value: 50,
    pos: 'degr <= 75',
    img: returnImgBySlug('vicoins')
  },
  {
    slug: 'vicoins',
    value: 10,
    pos: 'degr <= 18 || degr >= 324',
    img: returnImgBySlug('vicoins')
  }
];

const roulette = props => {
  //Init degree
  const degree = 360*5;
  const [chanceToPlay, setChanceToPlay] = useState(1);
  const [feedbackPrize, setFeedbackPrize] = useState({});
  const [finalDegree, setFinalDegree] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if(finalDegree)
      evalPrizes();

  }, [finalDegree]);

  const onSpin = () => {
    if(chanceToPlay < 1) return;

    //Calculate final degree of rotation spin
    const powDegree = degree * chanceToPlay *2; //Speed *2

    //generate random number between 1 - 360
    const randomDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;

    //Add the pow to the randomDegree
    setFinalDegree(powDegree+randomDegree);
  };

  const handleOnPrize = (val, slug) => {
    setFeedbackPrize({value: val, slug: slug});
    setModalIsOpen(true);

    //Update points and coins
    if(slug === 'vicoins')
      dispatch(increaseCoins(val));
  };

  const evalPrizes = () => {
    let c = 0; const n = 650;

    //reset chance to play
    setChanceToPlay(0);

      const interval = setInterval(function () {
        c++;

        //if equals mean finished the rotation time, then eval prizes
        if (c === n) {
          clearInterval(interval);

          const degr = finalDegree % 360;

          //declare param degr to replace by value
          const regex = /degr/gi;
          const aPrizes = [...prizes].reverse();

          for(const prize of aPrizes){
            //eval str
            if(eval(prize.pos.replace(regex, degr))){
              handleOnPrize(prize.value, prize.slug);
              break;
            }
          }
        }

      }, 10);
  };

  const handleCloseModal = () => {
    console.log("handleCloseModal")
  };

  return(
    <div>
      <Modal
        title="Congratulations!"
        open={modalIsOpen}
        closeButton={{ onClick: handleCloseModal, block: true }}
        content={{
          notice: 'You have won:',
          itemText: feedbackPrize.value,
          item: feedbackPrize.slug === 'vicoins' && <img width={30} src={vicoinsImg} />
        }}
      />

      <div className="sign-pos">
        <img className="sign" src={signImg} />
        <span>Lucky Spin</span>
      </div>
      <div className="sand">
        <div className="greetings">
          <img className="gull" src={seagullImg} />
          <div className="bubble-box">Hi!.. Spin the Wheel to get a Prize. <br/>Good Luck!</div>
        </div>
      </div>

      <div id="roulette">
        <div id="wheel">
          <div id="inner-wheel" style={{transform: `rotate(${finalDegree}deg)`}}>
            {
              prizes.map((prize, i) => {

                return (
                  <div className="sec" key={i}>
                    <i>{prize.value}</i>
                    { prize.img }
                  </div>
                );

              })
            }

          </div>

          <div id="spin" onClick={onSpin}>
            <div id="inner-spin"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default roulette;