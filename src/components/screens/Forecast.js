import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Day from '../Day';
import { WeatherIcon, PageWrap, fadeIn } from '../../styles';
import { getDayOfWeek, imgUrl } from '../../utils/helper';
import {
  selectDay as selectDayAction,
  fetchForecast as fetchForecastAction
} from '../../actions';
import Preloader from '../Preloader';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  border-radius: 10px;
  padding: 0 30px;
  padding-top: 30px;
  padding-bottom: 10px;
  background: linear-gradient(
    to bottom,
    rgba(242, 242, 115, 1) 5%,
    rgba(242, 242, 115, 1) 36%,
    rgba(251, 212, 91, 1) 82%,
    rgba(254, 200, 82, 1) 100%
  );
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.75s linear;
`;

const PreloaderWrap = styled.div`
  padding-top: 250px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
`;

const TemperatureBlock = styled.div`
  display: flex;
  align-items: center;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  justify-content: center;
`;

const DayPicker = styled.div`
  display: flex;
  min-width: 564px;
  padding: 10px;
`;

const CityName = styled.h1`
  margin: 0;
`;

const Caption = styled.span`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
`;

const HeaderCaption = styled.span`
  margin-bottom: 2px;
  font-size: 20px;
`;

const Value = styled.span`
  margin-bottom: 5px;
  font-size: 20px;
`;

const Temperature = styled.span`
  font-size: 64px;
  color: rgba(0, 0, 0, 0.7);
  margin-left: 20px;
`;

const Forecast = ({
  selectedDay,
  forecast,
  fetchForecast,
  match,
  selectDay
}) => {
  useEffect(() => {
    fetchForecast(match.params.city);
    selectDay(0);
  }, [match.params.city, selectDay, fetchForecast]);

  const { weatherByDays, cityName, region, woeid } = forecast;

  if (woeid === parseInt(match.params.city, 10)) {
    return (
      <PageWrap>
        <Wrap>
          <Header>
            <CityName>{`${cityName}, ${region}`}</CityName>
            <HeaderCaption>
              {getDayOfWeek(
                new Date(weatherByDays[selectedDay].applicable_date).getDay()
              )}
            </HeaderCaption>
            <HeaderCaption>
              {weatherByDays[selectedDay].weather_state_name}
            </HeaderCaption>
          </Header>
          <MainBlock>
            <TemperatureBlock>
              <WeatherIcon
                src={`${imgUrl}${
                  weatherByDays[selectedDay].weather_state_abbr
                }.svg`}
              />
              <Temperature>{`${Math.round(
                weatherByDays[selectedDay].the_temp
              )}℃`}</Temperature>
            </TemperatureBlock>
            <DescriptionBlock>
              <div>
                <Caption>Pressure:</Caption>
                <Value>{` ${Math.round(
                  weatherByDays[selectedDay].air_pressure
                )} mbar`}</Value>
              </div>
              <div>
                <Caption>Humidity:</Caption>
                <Value>{` ${Math.round(
                  weatherByDays[selectedDay].humidity
                )}%`}</Value>
              </div>
              <div>
                <Caption>Wind speed:</Caption>
                <Value>{` ${Math.round(
                  weatherByDays[selectedDay].wind_speed
                )} mph`}</Value>
              </div>
            </DescriptionBlock>
          </MainBlock>
          <DayPicker>
            {weatherByDays.map((day, i) => (
              <Day
                day={day}
                key={day.id}
                onClick={() => selectDay(i)}
                selected={selectedDay === i}
              />
            ))}
          </DayPicker>
        </Wrap>
      </PageWrap>
    );
  }
  return (
    <PreloaderWrap>
      <Preloader />
    </PreloaderWrap>
  );
};

const mapStateToProps = (state) => ({
  selectedDay: state.forecast.selectedDay,
  forecast: state.forecast.forecastData
});

export default connect(
  mapStateToProps,
  { selectDay: selectDayAction, fetchForecast: fetchForecastAction }
)(Forecast);
