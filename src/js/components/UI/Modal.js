import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Aux from '../../hoc/Aux';
import Button from '../../components/UI/Button';
import trivoImg from '../../../assets/images/trivo.png';

const modal = ({ title, content, children, custom, open, actionButton, closeButton }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(open)
      setIsOpen(open);

  }, [open]);

  const toggle = () => {
    setIsOpen(!isOpen);

    if(closeButton) closeButton.onClick();
  };

  const closeClick = () => {
    toggle();

    if(closeButton) closeButton.onClick();
  };

  const actionClick = () => {
    toggle();

    if(actionButton) actionButton.onClick();
  };

  return (
    <Aux>
      <Modal isOpen={isOpen} toggle={toggle} className={"global-modal"}>
        <ModalHeader toggle={toggle}>
          <div className="avatar">
            <img src={trivoImg} alt="trivo"/>
          </div>

          {
            title ? <span>{ title }</span> : null
          }

        </ModalHeader>
        <ModalBody>

          {
            custom ? children :
            (
              <div className="mo-content">
                <span className="notice">{ content.notice }</span>
                <span className="item-txt">{ content.itemText }</span>
                <div className="item">{ content.item }</div>
              </div>
            )
          }

        </ModalBody>
        <ModalFooter>

          {
            actionButton ?
              (
                <Button
                  color={'green small'}
                  block={actionButton && actionButton.hasOwnProperty("block") ? actionButton.block : false}
                  handleClick={actionClick}
                >
                  {
                    actionButton && actionButton.hasOwnProperty("label") ?
                      actionButton.label : 'Agreed'
                  }
                </Button>
              )
              : null
          }

          <Button
            color={'blue small'}
            block={closeButton && closeButton.hasOwnProperty("block") ? closeButton.block : false}
            handleClick={closeClick}
          >
              {
                closeButton && closeButton.hasOwnProperty("label") ?
                closeButton.label : 'Close'
              }
          </Button>
        </ModalFooter>
      </Modal>
    </Aux>
  )
};


modal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.object,
  custom: PropTypes.bool,
  actionButton: PropTypes.object,
  closeButton: PropTypes.object,
};

export default modal;