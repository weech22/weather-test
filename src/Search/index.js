import React from 'react';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { compose } from 'redux';
import NoResults from '../NoResults';
import CityList from '../CityList';
import { Searchbar, PageWrap as Wrap } from '../styles';
import {
  fetchCityList as fetchCityListAction,
  apiSearch as apiSearchAction,
  emptyCityList as emptyCityListAction,
} from '../actions';

class Search extends React.Component {
  componentDidMount = () => {
    const { apiSearch } = this.props;
    apiSearch('');
  };

  onKeyPress = (e) => {
    const { searchTerm, fetchCityList, emptyCityList } = this.props;

    if (e.key === 'Enter') {
      if (searchTerm === '') {
        emptyCityList();
      } else {
        fetchCityList(searchTerm);
      }
    }
  };

  onChange = (e) => {
    e.persist();
    const { apiSearch, emptyCityList, searchTerm } = this.props;
    if (searchTerm === '') {
      emptyCityList();
    }

    apiSearch(e.target.value);
  };

  render() {
    const { cityList, searchTerm } = this.props;
    const { onChange, onKeyPress } = this;

    return (
      <Wrap>
        <Searchbar onChange={onChange} placeholder="New York" onKeyPress={onKeyPress} />
        {cityList !== null && searchTerm !== '' && (
          <CityList listofCities={cityList} listType="searchResults" />
        )}
        {searchTerm !== '' && cityList === null && <NoResults />}
      </Wrap>
    );
  }
}

const mapStateToProps = state => ({
  cityList: state.searchResult,
  searchTerm: state.apiSearchTerm,
});

export default compose(
  withCookies,
  connect(
    mapStateToProps,
    {
      fetchCityList: fetchCityListAction,
      apiSearch: apiSearchAction,
      emptyCityList: emptyCityListAction,
    },
  ),
)(Search);
