import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Plotly from 'react-native-plotly';
import LineChartExample from './LineChartExample'; // Import your LineChart component
import BarChartExample from './BarChartExample'; // Import your BarChart component

const PlotlyChartCard = () => {
  const [selectedChart, setSelectedChart] = useState('line');

  const renderChartComponent = () => {
    if (selectedChart === 'line') {
      return <LineChartExample />;
    } else if (selectedChart === 'bar') {
      return <BarChartExample />;
    }

    // Add more conditions for other chart types if needed
  };

  const toggleChart = () => {
    setSelectedChart(selectedChart === 'line' ? 'bar' : 'line');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Chart Title</Text>
        <View style={styles.chartContainer}>{renderChartComponent()}</View>
        <TouchableOpacity style={styles.button} onPress={toggleChart}>
          <Text style={styles.buttonText}>
            Switch Chart ({selectedChart === 'line' ? 'Bar Chart' : 'Line Chart'})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default PlotlyChartCard;

