import React from 'react';
import styled from 'styled-components';
import { WeatherIcon } from '../styles';
import { getShortDayOfWeek, imgUrl } from '../utils/helper';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding: ${props => (props.selected ? '5px 9px;' : '5px 10px;')};
  background: ${props => (props.selected ? 'rgba(255,255,255, 0.2)' : 'auto')};
  color: ${props => (props.selected ? '#ffffff' : 'black')};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  box-shadow: ${props => (props.selected ? '4px 2px 5px rgba(0, 0, 0, 0.5)' : '0')};
  &:hover {
    background: ${props => (!props.selected ? 'rgba(0,0,0, 0.1)' : 'auto')};
    box-shadow: ${props => (!props.selected ? '4px 2px 5px rgba(0, 0, 0, 0.2)' : '0')};
  }
`;

const Temperature = styled.div`
  display: flex;
`;

const WeatherIconButton = styled(WeatherIcon)`
  max-width: 64px;
  max-height: 64px;
  margin: 8px 5px;
`;

const WeekDay = styled.span`
  font-size: 20px;
`;

const MinTemp = styled.span`
  margin-left: 8px;
  font-size: 16px;
`;

const MaxTemp = styled.span`
  font-size: 16px;
`;

export default ({ day, onClick, selected }) => (
  <Wrap onClick={onClick} selected={selected}>
    <WeekDay>{getShortDayOfWeek(new Date(day.applicable_date).getDay())}</WeekDay>
    <WeatherIconButton src={`${imgUrl}${day.weather_state_abbr}.svg`} />
    <Temperature>
      <MaxTemp>{`${Math.round(day.max_temp)}°`}</MaxTemp>
      <MinTemp>{`${Math.round(day.min_temp)}°`}</MinTemp>
    </Temperature>
  </Wrap>
);
