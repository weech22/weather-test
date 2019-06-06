import React, { useEffect } from 'react';
import { withCookies } from 'react-cookie';
import { compose } from 'redux';
import { connect } from 'react-redux';
import NoResults from '../NoResults';
import CityList from '../CityList';
import { Searchbar, PageWrap as Wrap } from '../../styles';
import {
  localSearch as localSearchAction,
  localSearchResult as localSearchResultAction
} from '../../actions';

const Favorites = ({
  favoriteList,
  searchResult,
  searchTerm,
  localSearch,
  localSearchResult
}) => {
  useEffect(() => {
    localSearchResult(favoriteList, searchTerm);
  }, [searchTerm, favoriteList, localSearchResult]);

  useEffect(() => {
    localSearch('');
  }, [localSearch]);

  const onChange = (e) => {
    localSearch(e.target.value);
  };

  const listToDisplay = searchTerm ? searchResult : favoriteList;

  return (
    <Wrap>
      <Searchbar onChange={onChange} placeholder="Berlin" />
      <CityList listofCities={listToDisplay} listType="favorites" />
      {searchTerm !== '' && !searchResult.length && <NoResults />}
    </Wrap>
  );
};

const mapStateToProps = (state) => ({
  favoriteList: state.favoriteList,
  searchResult: state.localSearch.searchResult,
  searchTerm: state.localSearch.searchTerm
});

export default compose(
  withCookies,
  connect(
    mapStateToProps,
    {
      localSearch: localSearchAction,
      localSearchResult: localSearchResultAction
    }
  )
)(Favorites);
