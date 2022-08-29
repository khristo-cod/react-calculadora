//import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    fondo:{
        flex: 1,
        backgroundColor: 'black',
    },

    calculadoraContainer: {
        flex: 1,
        padding:20,
        justifyContent:'flex-end',
    },

    resultado:{
        color: 'white',
        fontSize: 50,
        textAlign: 'right',
        marginBottom:10,
    },

    resultadoPequeño:{
        color: '#9B9B9B',
        fontSize: 20,
        textAlign: 'right',
    },

    fila:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:5,
        paddingHorizontal:5,
    },

    boton:{
        height:50,
        width:50,
        backgroundColor: '#9B9B9B',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:5,
    },

    botonTexto:{
        color: 'black',
        textAlign: 'center',
        fontSize:20,
        fontWeight: 'bold',
    },


});
