// PieChartComponent.js

import React from 'react';
import { View } from 'react-native';
import Plotly from 'react-native-plotly';

const PieChartComponent = () => {
  const data = [
    {
      labels: ['Slice 1', 'Slice 2', 'Slice 3', 'Slice 4', 'Slice 5'],
      values: [25, 20, 15, 10, 30],
      type: 'pie',
    },
  ];

  const layout = {
    title: 'Pie Chart Example',
  };

  return (
    <View style={{ flex: 1 }}>
      <Plotly data={data} layout={layout} config={{ displayModeBar: false }}
          style={{ width: '100%', height: 300 }}/>
    </View>
  );
};

export default PieChartComponent;
