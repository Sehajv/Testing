import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import LineChartExample from './Components/LineChartExample';
import BarChartExample from './Components/BarChartExample';
import PieChartExample from './Components/PieChartExample';
import WaterfallChartExample from './Components/WaterfallChartExample';
import PlotlyChartCard from './Components/ChartCard';


const App = () => {
  return (

    <ScrollView style={{flex:1}}>
      <View style={{ padding: 16 }}>
        {/* <LineChartExample />
        <BarChartExample />
        <PieChartExample />
        <WaterfallChartExample /> */}
        <PlotlyChartCard />
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

