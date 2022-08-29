import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreens } from './src/screen/CalculadoraScreens';
import { styles } from './src/theme/AppTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor= "black"
        barStyle="light-content"
      />
      <CalculadoraScreens/>
    </SafeAreaView>
  );
};

export default App;
