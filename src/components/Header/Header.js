import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const HeaderNav = styled.header`
	position: fixed;
	top: 0;
    width: 100%;
    padding: 10px;
    background: rgba(143, 188, 143, 0.9);
`;

const NavMenu = styled.header`
	list-style-type: none;
	display: flex;
`;

const MenuItem = styled.li`
	margin: 5px;
	transition: all 0.3s linear;
    &:hover {
        transform: scale(1.1);
    }
`;

const StyledLink = styled(Link)`
  text-decoration: none !important;
  font-weight: bold;
  color: white;
`;

class Header extends Component {
    render() {
        return (
            <HeaderNav>
                <nav>
                    <NavMenu>
                        <MenuItem>
                            <StyledLink to='/'>Home</StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink to='/tasks'>Tasks</StyledLink>
                        </MenuItem>
                    </NavMenu>
                    {/*<ul>*/}
                        {/*<li><Link to='/Login'>Login</Link></li>*/}
                        {/*<li><Link to='/Register'>Register</Link></li>*/}
                    {/*</ul>*/}
                </nav>
            </HeaderNav>
        );
    }
}

export default Header;
