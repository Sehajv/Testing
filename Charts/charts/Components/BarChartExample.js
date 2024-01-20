// BarChartComponent.js

import React from 'react';
import { View } from 'react-native';
import Plotly from 'react-native-plotly';

const BarChartComponent = () => {
  const data = [
    {
      x: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
      y: [10, 14, 18, 24, 30],
      type: 'bar',
    },
  ];

  const layout = {
    title: 'Bar Chart Example',
    xaxis: { title: 'Categories' },
    yaxis: { title: 'Values' },
  };

  return (
    <View style={{ flex: 1 }}>
      <Plotly data={data} layout={layout} config={{ displayModeBar: false }}
          style={{ width: '100%', height: 300 }}/>
    </View>
  );
};

export default BarChartComponent;

