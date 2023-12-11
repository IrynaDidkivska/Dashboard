import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body{
  margin: 0;  
  font-family: Poppins-Medium, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px; 
  color: var(--main-text);
  background-color: var( --bg-secondary);
  
}

p,
h1,
h2,
h3,
h4,input {
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  width:100%;
  height: auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}

button{&:hover {
    cursor: pointer;
  }}
`;
