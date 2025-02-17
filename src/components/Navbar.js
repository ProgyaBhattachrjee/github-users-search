import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper style={{display: "flex",justifyContent: "flex-start"}}>
    <div style={{backgroundColor: "#5AF",padding:"10px",borderRadius: "50%",color: "white"}}>GIT</div>
    <p style={{color: "gray",fontWeight: "bolder"}} className='a'>welcome to GitUsers</p>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
