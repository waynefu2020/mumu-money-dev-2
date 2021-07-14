import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      padding: 10px 0;
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4px 0;

        > .icon {
          width: 24px;
          height: 24px;
          fill: #595959;
        }
        &.selected{
          > .icon{
            fill: #e66862;
          }
        }
      }


    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="tag" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="statistics"/>
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};


export default Nav;