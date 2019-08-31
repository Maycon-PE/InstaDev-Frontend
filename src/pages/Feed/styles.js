import styled from 'styled-components'

export const Section = styled.section`
	position: relative;
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;
`

export const Article = styled.article`
	background: #fff;
  border: 1px solid #ddd;
  margin-top: 30px;

  > header {
  	padding: 20px;

	  display: flex;
	  align-items: center;
	  justify-content: space-between;
  }

  > footer {
  	padding: 20px;

  	> div {
  		margin-bottom: 10px;

  		> button {
  			margin-right: 20px;

  			> img {
  				height: 20px;
  			}
  		}
  	}

  	> p {
  		font-size: 13px;
		  margin-top: 2px;
		  line-height: 18px;

		  > span {
		  	color: #7159c1;
  			display: block;
		  }
  	}
  }
`

export const UserInfo = styled.div`
	display: flex;
  flex-direction: column;

  > span.name {
  	font-size: 20px;
  }

  > span.place {
	  font-size: 11px;
	  color: #666;
	  margin-top: 6px;
  }
`

export const UserPicture = styled.div`
	display: flex;
  justify-content: center;

  > img {
	  width: 100%;
	  max-height: 518px;
  }
`
