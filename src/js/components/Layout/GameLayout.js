import React from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import { Container, Row, Col } from 'reactstrap';

const gameLayout = ({ header, body, footer, clsName }) => {

  return(
    <Container className={clsName ? clsName : null}>
      <Row>
        <Col md="12">
          <Card
            headerContent={header}
            bodyContent={body}
            footerContent={footer ? footer : null}
          />

        </Col>
      </Row>
    </Container>
  );
};

gameLayout.propTypes = {
  clsName: PropTypes.string,
  header: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

export default gameLayout;