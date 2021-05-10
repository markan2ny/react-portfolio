import React from 'react';
import { Avatar, Container, ImgWrapper, Name } from './styles/Sidebar';


function Sidebar({children, ...props}) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}


// Compound components of sidebar
Sidebar.Avatar = function SidebarAvatar({imgSrc, children, ...props}) {
    return (<Avatar src={imgSrc}></Avatar>)
}
Sidebar.Name = function SidebarName({children, ...props}) {
    return (<Name>{children}</Name>)
}
Sidebar.ImgWrapper = function SidebarImgaWrapper({children, ...props}) {
    return (<ImgWrapper>{children}</ImgWrapper>)
}




export default Sidebar
