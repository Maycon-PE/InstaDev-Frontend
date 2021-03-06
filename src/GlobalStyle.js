import {
	createGlobalStyle
} from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
	  padding: 0;
	  margin: 0;
	  outline: 0;
	  box-sizing: border-box;
	}

	body {
	  background: #fafafa;
	  padding-bottom: 50px;
	  font: 14px Arial, Helvetica, sans-serif;
	  -webkit-font-smoothing: antialiased !important;
	}


	button {
	  border: none;
	  background: transparent;
	  cursor: pointer;
	}
`

export default GlobalStyle
