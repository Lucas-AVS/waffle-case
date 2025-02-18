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
        background-color: ${(props) => props.theme['branco']};
        color: ${(props) => props.theme['preto']};

    };
    
    body, input, textarea, button { 
        font-family: var(--font-sans);
	    font-weight: 400; 
        font-size: 1.25rem; }

    h1 {
        font-size: 3.25rem;
        font-weight: 700;
    }

    h2 {
        font-size: 1.75;
        font-weight: 700;
    }

    @media (max-width: 560px) {
        h1 {
            font-size: 2rem;
        }
        h2 {
            font-size: 1.25rem;
        }
        body, input, textarea, button {
            font-size: 1rem;
        }
  }
`