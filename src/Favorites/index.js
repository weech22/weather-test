import React from 'react';
import { withCookies } from 'react-cookie';
import { compose } from 'redux';
import { connect } from 'react-redux';
import NoResults from '../NoResults';
import CityList from '../CityList';
import { Searchbar, PageWrap as Wrap } from '../styles';
import {
  localSearch as localSearchAction,
  localSearchResult as localSearchResultAction,
} from '../actions';

class Favorites extends React.Component {
  componentDidUpdate(prevProps) {
    const { searchTerm, favoriteList, localSearchResult } = this.props;
    if (prevProps.searchTerm !== searchTerm) {
      localSearchResult(favoriteList, searchTerm);
    }
  }

  componentDidMount = () => {
    const { localSearch } = this.props;
    localSearch('');
  };

  onChange = (e) => {
    const { localSearch } = this.props;
    localSearch(e.target.value);
  };

  render() {
    const { favoriteList, searchResult, searchTerm } = this.props;
    const listToDisplay = searchTerm ? searchResult : favoriteList;
    return (
      <Wrap>
        <Searchbar onChange={this.onChange} placeholder="Berlin" />
        <CityList listofCities={listToDisplay} listType="favorites" />
        {searchTerm !== '' && !searchResult.length && <NoResults />}
      </Wrap>
    );
  }
}

const mapStateToProps = state => ({
  favoriteList: state.favoriteList,
  searchResult: state.localSearchResult,
  searchTerm: state.localSearchTerm,
});

export default compose(
  withCookies,
  connect(
    mapStateToProps,
    { localSearch: localSearchAction, localSearchResult: localSearchResultAction },
  ),
)(Favorites);
