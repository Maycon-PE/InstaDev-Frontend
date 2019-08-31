import styled from 'styled-components'

export const Form = styled.form`
	width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;

  > input {
  	margin-bottom: 10px;
  }

  > input[type=text] {
  	height: 38px;
	  border-radius: 4px;
	  border: 1px solid #ddd;
	  padding: 0 20px;
	  font-size: 14px;
  }

  > input[type=text]:hover {
    background: rgba(0, 0, 0, .2);
  }

  > input[type=text]:valid {
   background: rgba(0, 100, 0, .2); 
  }

  > input[type=file] {
    display: none;
  }

  > input[type=file]:valid ~ input[type=button] {
    opacity: 1;
  }

  > input[type=button],
  > button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #7159c1;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    opacity: .9;
  }

  > input[type=button]:hover,
  > button:hover {
    opacity: 1;
  }

  
`
