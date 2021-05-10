import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 16.3rem;
    height: 100vh;
    background: #ffff;
    color: #fff;
`;
export const Name = styled.h1``;
export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    
`;
export const ImgWrapper = styled.div`
    display: block;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border: 2px solid #fff;
    border-radius: 100%;
    margin: auto;
`;

export const NavLink = styled(Link)``;
