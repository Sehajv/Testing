// LineChartComponent.js

import React from 'react';
import { View } from 'react-native';
import Plotly from 'react-native-plotly';

const LineChartComponent = () => {
  const data = [
    {
      x: [1, 2, 3, 4, 5],
      y: [10, 11, 13, 12, 10],
      type: 'scatter',
    },
  ];

  const layout = {
    title: 'Line Chart Example',
    xaxis: { title: 'X-axis' },
    yaxis: { title: 'Y-axis' },
  };

  return (
    <View style={{ flex: 1 }}>
      <Plotly data={data} layout={layout} config={{ displayModeBar: false }}
          style={{ width: '100%', height: 300 }}/>
    </View>
  );
};

export default LineChartComponent;

