import React from 'react';
import styled  from 'styled-components' 

const Main = styled.main`
  background:linear-gradient(to left, rgba(255,0,0,0), rgba(0,0,0,1)), url("img/bbb19-programa-web.jpg");
  background-size:cover;
  background-position: center;
  background-repeat:no-repeat;
  height: 100vh;
`


const Header = styled.header`
  img{
    position: fixed;
    top: 1rem;
    right: 2.5rem;
    width:200px;
  }
`

const Page = ({ children }) => (
  <Main>
    <Header>
      <img src="img/logo-globo.svg" alt="Globoplay"/>
    </Header>
    
    {children}
    
  </Main>
);

export default Page;