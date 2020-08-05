import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap';

const card = props => (

  <Card>
    <CardHeader className="bg-secondary-dark text-center">
      {props.headerContent}
    </CardHeader>

    <CardBody className="bg-secondary-light">
      {props.bodyContent}
    </CardBody>

    {
      props.footerContent ?

        <CardFooter className="bg-secondary-dark text-center">
          {props.footerContent}
        </CardFooter>
      : null
    }


  </Card>

);

card.propTypes = {
  headerContent: PropTypes.node,
  bodyContent: PropTypes.node,
  footerContent: PropTypes.node,
};

export default card;