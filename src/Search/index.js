import React from 'react';
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { compose } from 'redux';
import NoResults from '../NoResults';
import CityList from '../CityList';
import { Searchbar, PageWrap as Wrap } from '../styles';
import { fetchCityList, apiSearch, emptyCityList } from '../actions';

class Search extends React.Component {
  componentDidUpdate(prevProps) {
    const { searchTerm, fetchCityList, emptyCityList } = this.props;
    if (prevProps.searchTerm !== '' && searchTerm === '') {
      emptyCityList();
    } else if (prevProps.searchTerm !== searchTerm) {
      fetchCityList(searchTerm);
    }
  }

  componentDidMount = () => {
    const { apiSearch } = this.props;

    apiSearch('');
  };

  onChange = (e) => {
    e.persist();

    const { apiSearch } = this.props;

    apiSearch(e.target.value);
  };

  render() {
    const { cityList, searchTerm } = this.props;
    const { onChange } = this;

    return (
      <Wrap>
        <Searchbar onChange={onChange} placeholder="New York" />
        {cityList !== null && searchTerm !== '' && (
          <CityList cityList={cityList} listType="searchResults" />
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
    { fetchCityList, apiSearch, emptyCityList },
  ),
)(Search);
