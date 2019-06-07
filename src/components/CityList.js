import React from 'react';
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { FavoriteButton, fadeIn } from '../styles';
import { updateFavorites as updateFavoritesAction, hoverCity as hoverCityAction } from '../actions';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CityName = styled.span`
  background: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  color: #424242;
  width: 100%;
  &:hover {
    font-weight: bold;
  }
`;

const ListItem = styled.li`
  border: none;
  position: relative;
  background: ${props => (props.index % 2 === 0 ? '#fff2bc' : '#ffd0bc')};
  background: ${props => (props.isHovered ? '#8ed3e9' : 'auto')};
  transition: background 1s;
  border-radius: 10px;
  padding: 10px 50px;
  display: flex;
  width: 79%;
  justify-content: center;
  margin-bottom: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.75s linear;
`;

const CityList = styled.ul`
  list-style-type: none;
  width: 25%;
  padding: 0;
`;

const cityList = ({
  listofCities, cookies, updateFavorites, listType, hoverCity, hoveredCity,
}) => {
  // const isFavorite = (favoriteCookie, city) => favoriteCookie.get('weather_favorite').map(town => town.woeid).indexOf(city.woeid) !== -1;

  const isFavorite = (favoriteCookie, city) => R.indexOf(city.woeid, R.map(town => town.woeid, favoriteCookie.get('weather_favorite')))
    !== -1;

  const onClick = (favoriteCookie, city) => {
    const favorites = favoriteCookie.get('weather_favorite');

    if (isFavorite(cookies, city)) {
      favoriteCookie.set(
        'weather_favorite',
        favorites.filter(town => town.woeid !== city.woeid),
        {
          path: '/',
        },
      );
    } else {
      favoriteCookie.set('weather_favorite', [...favorites, city], {
        path: '/',
      });
    }

    updateFavorites(cookies.get('weather_favorite'));
  };

  return (
    <CityList>
      {listofCities.map((city, i) => (
        <ListItem key={city.woeid} index={i} isHovered={hoveredCity === city.woeid}>
          <StyledLink to={`forecast/${city.woeid}`}>
            <CityName
              onMouseEnter={() => hoverCity(city.woeid)}
              onMouseLeave={() => hoverCity(null)}
            >
              {city.title}
            </CityName>
          </StyledLink>
          <FavoriteButton
            onClick={() => onClick(cookies, city)}
            isFavorite={isFavorite(cookies, city)}
            listType={listType}
            disabled={isFavorite(cookies, city) && listType === 'searchResults'}
          />
        </ListItem>
      ))}
    </CityList>
  );
};

const mapStateToProps = state => R.pick(['hoveredCity'], state);

export default compose(
  withCookies,
  connect(
    mapStateToProps,
    { updateFavorites: updateFavoritesAction, hoverCity: hoverCityAction },
  ),
)(cityList);
