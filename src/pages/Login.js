import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
const Login = () => {
  return (
    <Wrapper >
      <div className="container" >
        <img src={loginImg} alt="github user" />
        <h1>github users</h1>
      <Link to='/dashboard'> <button className='btn'>login</button></Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
