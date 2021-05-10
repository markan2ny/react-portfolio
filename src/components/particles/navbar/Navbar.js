import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Header = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    & nav__list {
        width: 100%;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        & li {
            
        }
    }
`;
const NavLink = styled(Link)`
    color: #fff;
    text-transform: uppercase;
`;

function Navbar({data}) {
    return (
        <Header>
            <ul className="nav__list">
                {
                    data.nav.links.map((link,index) => {
                        return(
                            <li key={index}>
                                <NavLink to={link.path}>{link.title}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </Header>
    )
}

export default Navbar
