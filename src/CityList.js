import React from 'react';
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FavoriteButton, fadeIn } from './styles';
import { updateFavorites, hoverCity } from './actions';

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
  border-radius: 7px;
  padding: 10px 100px 10px 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.75s linear;
`;

const CityList = styled.ul`
  list-style-type: none;
  margin-right: 35px;
`;

const cityList = ({
  cityList, cookies, updateFavorites, listType, hoverCity, hoveredCity,
}) => {
  const isFavorite = city => cookies
    .get('weather_favorite')
    .map(town => town.woeid)
    .indexOf(city.woeid) !== -1;

  const onClick = (city) => {
    const favorites = cookies.get('weather_favorite');

    if (isFavorite(city)) {
      cookies.set('weather_favorite', favorites.filter(x => x.woeid !== city.woeid), {
        path: '/',
      });
    } else {
      cookies.set('weather_favorite', [...favorites, city], { path: '/' });
    }

    updateFavorites(cookies.get('weather_favorite'));
  };

  return (
    <CityList>
      {cityList.map((city, i) => (
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
            onClick={() => onClick(city)}
            isFavorite={isFavorite(city)}
            listType={listType}
            disabled={isFavorite(city) && listType === 'searchResults'}
          />
        </ListItem>
      ))}
    </CityList>
  );
};

const mapStateToProps = state => ({
  hoveredCity: state.hoveredCity,
});

export default compose(
  withCookies,
  connect(
    mapStateToProps,
    { updateFavorites, hoverCity },
  ),
)(cityList);
