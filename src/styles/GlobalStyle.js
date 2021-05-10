import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none;
        list-style-type: none;
    }
    body {
        position: relative;
        width: 100%;
        height: 100%;
    }
    #tsparticles canvas{
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	background-color: #333;
}

`;

export default GlobalStyle;