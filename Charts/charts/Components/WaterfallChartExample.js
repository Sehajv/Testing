// WaterfallChartComponent.js

import React from 'react';
import { View } from 'react-native';
import Plotly from 'react-native-plotly';

const WaterfallChartComponent = () => {
  const categories = ['Start', 'Category 1', 'Category 2', 'Category 3', 'End'];
  const incrementalValues = [0, 10, 5, -8, 7];
  const previousValues = [0, 0, 10, 15, 0];

  // Calculate cumulative values to start each bar from the previous bar's top
  const cumulativeValues = incrementalValues.reduce((acc, val, index) => {
    acc.push(previousValues[index] + val);
    return acc;
  }, [0]);

  // Define colors for the incremental and previous portions of each bar
  const incrementalColor = 'rgb(0, 128, 0)'; // green
  const negativeIncrementalColor = 'rgb(255, 0, 0)'; // red for negative values
  const previousColor = 'rgb(255, 255, 255)'; // white

  // Create two traces for each category with different colors
  const trace1 = {
    x: categories,
    y: previousValues,
    type: 'bar',
    marker: {
      color: previousColor,
    },
  };

  const trace2 = {
    x: categories,
    y: incrementalValues,
    type: 'bar',
    marker: {
      color: incrementalValues.map((value) => (value < 0 ? negativeIncrementalColor : incrementalColor)),
    },
  };

  const data = [trace1, trace2];

  const layout = {
    title: 'Waterfall Chart Example',
    xaxis: { title: 'Categories' },
    yaxis: { title: 'Values' },
    barmode: 'stack', // Set barmode to 'stack' for stacked bars
  };

  return (
    <View style={{ flex: 1 }}>
      <Plotly data={data} layout={layout} config={{ displayModeBar: false }}
          style={{ width: '100%', height: 300 }}/>
    </View>
  );
};

export default WaterfallChartComponent;


