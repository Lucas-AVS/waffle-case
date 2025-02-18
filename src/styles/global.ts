import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-sans: 'Mulish', sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    body {
        background-color: ${(props) => props.theme['cinza-100']};
        color: ${(props) => props.theme['preto']};

    };
    
    body, input, textarea, button { 
        font-family: var(--font-sans);
	    font-weight: 400; 
        font-size: 1rem; }
`