import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CookiesProvider, withCookies } from 'react-cookie';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { updateFavorites as updateFavoritesAction } from './actions';
import Navigation from './Navigation';
import Search from './Search';
import Favorites from './Favorites';
import Forecast from './Forecast';
import 'normalize.css';
import './index.css';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class App extends React.Component {
  componentWillMount = () => {
    const { cookies, updateFavorites } = this.props;

    if (!cookies.get('weather_favorite')) {
      cookies.set('weather_favorite', [], { path: '/' });
    }

    updateFavorites(cookies.get('weather_favorite'));
  };

  render() {
    return (
      <Wrap>
        <CookiesProvider>
          <BrowserRouter>
            <Route component={Navigation} />
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition key={location.key} timeout={750}>
                    <Switch location={location}>
                      <Route path="/" exact component={Search} />
                      <Route path="/favorites" component={Favorites} />
                      <Route path="/forecast/:city" component={Forecast} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </BrowserRouter>
        </CookiesProvider>
      </Wrap>
    );
  }
}

export default compose(
  withCookies,
  connect(
    null,
    { updateFavorites: updateFavoritesAction },
  ),
)(App);
