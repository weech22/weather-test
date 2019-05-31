import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  min-width: 400px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 26px;
  padding: 10px;
  border-radius: 10px;
  margin: 0 10px;
  &:active {
    color: black;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 4px 2px 5px rgba(0, 0, 0, 0.2);
  }
  transition: background 0.5s;
`;

const activeStyle = {
  fontWeight: 'bold',
  color: 'white',
  border: '1px solid white',
  background: 'rgba(0, 0, 0, 0.3)',
  boxShadow: '4px 2px 5px rgba(0, 0, 0, 0.5)',
};

export default () => (
  <Wrap>
    <StyledNavLink activeStyle={activeStyle} to="/" exact>
      Search
    </StyledNavLink>
    <StyledNavLink activeStyle={activeStyle} to="/favorites">
      Favorites
    </StyledNavLink>
  </Wrap>
);
