import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class HeaderDropdown extends Component {
  static propTypes = {
    optionOne: PropTypes.string,
    optionTwo: PropTypes.string,
    headerItemName: PropTypes.string,
    Reset: PropTypes.string,
  }

  static defaultProps = {
    optionOne: 'Option 1',
    optionTwo: 'Option 2',
    Reset: 'Reset',
    headerItemName: 'Item Name'
  }


  render() {
    const { optionOne, optionTwo, Reset, headerItemName } = this.props;

    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle style={{ color: 'black' }} className="dropdown" nav caret>
          {headerItemName}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            {optionOne}
          </DropdownItem>
          <DropdownItem>
            {optionTwo}
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            {Reset}
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}

export default HeaderDropdown;
