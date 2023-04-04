import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { Wrapper, ButtonCBack} from './StatisticStyle'
const Main = () => {
  window.location.replace('/')}
const Statistic = () => {
  const [datatest, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://640c3750a3e07380e8ef3958.mockapi.io/test/src')
    .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
    return (
      <Wrapper>
          <ResponsiveContainer className="chart" height={650}>
          <LineChart
            width={600}
            height={500}
            data={datatest}
            margin={{top: 20, right: 50, left: 20, bottom: 10}}>
          <XAxis dataKey="date"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#0033FF" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="outcome" stroke="#FF3333" activeDot={{r: 8}}/>
          </LineChart>
        </ResponsiveContainer>
        <ButtonCBack onClick={Main}>Back</ButtonCBack>
      </Wrapper>
    )
}

export default Statistic;

