import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/AppTheme';
import { BotonCalc } from '../components/BotonCalc';
import {useCalculator} from '../hooks/useCalculator';

export const CalculadoraScreens = () => {
  const {
    del,
    limpiar,
    armarNumero,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    positivoNegativo,
    calcular,
    numero,
    numeroAnterior,
  } = useCalculator();

  return (
    <View style={styles.calculadoraContainer}>
      {
        (numeroAnterior !== '0') && (<Text style={styles.resultadoPequeño}>{numeroAnterior}</Text>)
      }

      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {numero}
      </Text>

      {/*Fila de botones*/}
      <View style={styles.fila}>
        <BotonCalc texto="c" color="#9B9B9B" accion={ limpiar }/>
        <BotonCalc texto="+/-" color="#9B9B9B" accion={ positivoNegativo }/>
        <BotonCalc texto="del" color="#9B9B9B" accion={ del }/>
        <BotonCalc texto="/" color="#FF9427" accion={ btnDividir }/>
      </View>

      {/*Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero}/>
        <BotonCalc texto="8" accion={armarNumero}/>
        <BotonCalc texto="9" accion={armarNumero}/>
        <BotonCalc texto="x" accion={ btnMultiplicar } color="#FF9427"/>
      </View>

      {/*Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero}/>
        <BotonCalc texto="5" accion={armarNumero}/>
        <BotonCalc texto="6" accion={armarNumero}/>
        <BotonCalc texto="-" accion={ btnRestar } color="#FF9427"/>
      </View>

      {/*Fila de botones */}
      <View style={styles.fila}>
      <BotonCalc texto="1" accion={armarNumero}/>
        <BotonCalc texto="2" accion={armarNumero}/>
        <BotonCalc texto="3" accion={armarNumero}/>
        <BotonCalc texto="+" accion={ btnSumar } color="#FF9427"/>
      </View>

      {/*Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="0" accion={armarNumero} ancho/>
        <BotonCalc texto="."accion={armarNumero}/>
        <BotonCalc texto="=" accion={ calcular }color="#FF9427"/>
      </View>


    </View>
  );
};
