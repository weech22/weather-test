import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import heartOn from './images/heart-on.svg';
import heartOff from './images/heart-off.svg';
import brokenHeart from './images/broken-heart.svg';
import enter from './images/enter.png';

export const WeatherIcon = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
`;

export const Searchbar = styled.input`
  border: 1px solid black;
  outline: none;
  border-radius: 5px;
  padding: 13px 30px 13px 19px;
  width: 350px;
  box-sizing: border-box;
  background-color: white;
  background-image: url(${enter});
  background-repeat: no-repeat;
  background-position: 95% center;
  &::placeholder {
  }
  margin: 20px 0;
`;

export const FavoriteButton = styled.button`
  width: 15px;
  height: 15px;
  position: absolute;
  border: none;
  outline: none;
  top: 12px;
  right: 10px;
  cursor: pointer;
  background-image: ${props => (props.isFavorite ? `url(${heartOn})` : `url(${heartOff})`)};
  &:hover {
    background-image: ${props => (props.isFavorite && props.listType !== 'searchResults'
    ? `url(${brokenHeart})`
    : `url(${heartOn})`)};
  }
  &:disabled {
    cursor: default;
  }
  transition: background-image 0.3s;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: black;
  }
  color: black;
`;

export const PageWrap = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
