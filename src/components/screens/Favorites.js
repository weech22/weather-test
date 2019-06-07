import React, { useEffect } from 'react';
import { withCookies } from 'react-cookie';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as R from 'ramda';
import NoResults from '../NoResults';
import CityList from '../CityList';
import { Searchbar, PageWrap as Wrap } from '../../styles';
import {
  localSearch as localSearchAction,
  localSearchResult as localSearchResultAction,
} from '../../actions';

const Favorites = ({
  favoriteList, searchResult, searchTerm, localSearch, localSearchResult,
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

const mapStateToProps = state => ({
  favoriteList: R.path(['favoriteList'], state),
  searchResult: R.path(['localSearch', 'searchResult'], state),
  searchTerm: R.path(['localSearch', 'searchTerm'], state),
});

export default compose(
  withCookies,
  connect(
    mapStateToProps,
    {
      localSearch: localSearchAction,
      localSearchResult: localSearchResultAction,
    },
  ),
)(Favorites);
