import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

const resultsTable = (props) => {
  //Todo; delete this component
  return(

    <Table bordered responsive striped>

      <tbody>

      {
        props.aData.map((item, i) => {

          return(
            <tr key={i}>
              <td>
                {item.questionValue}
                <span>{item.answers.right.value}</span>
              </td>

              {
                (Object.keys(item.answers.wrong).length !== 0) ?
                  <td className='red'>{item.answers.wrong.value}</td>
                  :
                  <td className='green'>{item.answers.right.value}</td>
              }
            </tr>
          )

        })
      }

      </tbody>
    </Table>

  );

};

resultsTable.propTypes = {
  aData: PropTypes.array.isRequired
};

export default resultsTable;