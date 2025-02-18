import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
    --font-sans: '__Mulish_1ed915', '__Mulish_Fallback_1ed915';
    --font-content: '__Montserrat_4bc053', '__Montserrat_Fallback_4bc053';
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