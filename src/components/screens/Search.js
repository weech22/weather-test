import React, { useEffect } from 'react';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { compose } from 'redux';
import NoResults from '../NoResults';
import CityList from '../CityList';
import { Searchbar, PageWrap as Wrap } from '../../styles';
import {
  fetchCityList as fetchCityListAction,
  apiSearch as apiSearchAction,
  emptyCityList as emptyCityListAction
} from '../../actions';

const Search = ({
  fetchCityList,
  apiSearch,
  cityList,
  emptyCityList,
  searchTerm
}) => {
  useEffect(() => {
    apiSearch('');
  }, [apiSearch]);

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (searchTerm === '') {
        emptyCityList();
      } else {
        fetchCityList(searchTerm);
      }
    }
  };

  const onChange = (e) => {
    e.persist();

    if (searchTerm === '') {
      emptyCityList();
    }

    apiSearch(e.target.value);
  };

  return (
    <Wrap>
      <Searchbar
        onChange={onChange}
        placeholder="New York"
        onKeyPress={onKeyPress}
      />
      {cityList !== null && searchTerm !== '' && (
        <CityList listofCities={cityList} listType="searchResults" />
      )}
      {searchTerm !== '' && cityList === null && <NoResults />}
    </Wrap>
  );
};

const mapStateToProps = (state) => ({
  cityList: state.apiSearch.searchResult,
  searchTerm: state.apiSearch.searchTerm
});

export default compose(
  withCookies,
  connect(
    mapStateToProps,
    {
      fetchCityList: fetchCityListAction,
      apiSearch: apiSearchAction,
      emptyCityList: emptyCityListAction
    }
  )
)(Search);
