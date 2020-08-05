import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Nav,  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import NavItem from './NavItem';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import spinWheelImg from '../../../assets/images/spin-wheel.png';

const nav = (props) => {
//CurrentUser
const currentUser = useSelector(state => state.userReducer.currentUser);
const history = useHistory();

  return (
    <Nav className="ml-auto" navbar>
      <NavItem disabled={true} path={"/roulette"}> <img src={spinWheelImg} width={30}/> Lucky Spin </NavItem>

      {
        props.navItems.map((navItem, i) => {
          let el = null;
          if(navItem.type === 'dropdown' && (currentUser && Object.keys(currentUser).length !== 0)){
            el = (
              <UncontrolledDropdown nav inNavbar key={i}>
                <DropdownToggle nav caret>
                  {currentUser.name}
                </DropdownToggle>

                <DropdownMenu right>
                  {navItem.children.map((subNav, i) => {

                    return(
                        <Aux key={i}>
                          {navItem.children.length === i +1 ? <DropdownItem divider /> : null}
                          <DropdownItem onClick={() => history.push(subNav.path)}>
                            {subNav.name}
                          </DropdownItem>
                        </Aux>
                    )

                  })}
                </DropdownMenu>

              </UncontrolledDropdown>
            );
          }else{
            el = (
              navItem.visible(navItem.name, currentUser) ?
                <NavItem key={i} path={navItem.path}> {navItem.name} </NavItem>
                : null
            );
          }

          return(el)

        })
      }
    </Nav>
  );
};

nav.propTypes = {
  navItems: PropTypes.array
};

export default nav;