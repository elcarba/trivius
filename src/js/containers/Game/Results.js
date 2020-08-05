import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Button from '../../components/UI/Button';
import Vicoin from '../../components/Vicoin/Vicoin';
import GameHeaderLayout from '../../components/Layout/GameHeaderLayout';
import GameLayout from '../../components/Layout/GameLayout';
import ResultsTable from '../../components/Table/ResultsTable';
import Table from '../../components/Table/Table';

const renderCols = () => {
  return [
    {
      title: 'Question',
      render: rowData => {
        return <div className="cont-question">
          {rowData.questionValue}
          <span className="ans-right">{rowData.answers.right.value}</span>
        </div>
      },
    },
    {
      title: 'Answer',
      render: rowData => {
        return <div className="cont-answers">
          {
            (Object.keys(rowData.answers.wrong).length !== 0) ?
              <span className='wrong'>{rowData.answers.wrong.value}</span>
              :
              <span className='right'>{rowData.answers.right.value}</span>
          }
        </div>;
      },
    },
  ];
};

const header = (categoryName, totalPoints, totalCoins) => (
  <GameHeaderLayout
    leftSideTop={
      <span>{categoryName}</span>
    }
    leftSideBottom={
      <span>{totalPoints} pts</span>
    }
    mainTop={
      <span>Results</span>
    }
    rightSideTop={
      <Vicoin qty={totalCoins}/>
    }
  />
);

const body = (results) => {

  return(
    <Row>
      <Col sm="12" md="10" className="offset-md-1 mt-3">
        <Table bordered responsive striped hideTHead theme={'th-results'} data={results} cols={renderCols()}  />
      </Col>
    </Row>
  );
};

const footer = (goBackHandle) => (
  <Button
    handleClick={ () => goBackHandle() }
    color="cat-play"
    size="lg"
    block
  >
    Continue
  </Button>
);


const results = (props) => {
  const {categoryName, totalPoints, totalCoins, aResults, goBackHandle} = props;

  return(
    <GameLayout
      clsName={"results-container"}
      header={
        header(categoryName, totalPoints, totalCoins)
      }
      body={
        body(aResults)
      }
      footer={
        footer(goBackHandle)
      }
    />
  );
};

results.propTypes = {
  aResults: PropTypes.array.isRequired,
  goBackHandle: PropTypes.func.isRequired,
  categoryName: PropTypes.string.isRequired,
  totalPoints: PropTypes.number.isRequired,
  totalCoins: PropTypes.number.isRequired,
};

export default results;