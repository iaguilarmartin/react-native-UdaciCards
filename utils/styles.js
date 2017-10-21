// import React from 'react';
import { StyleSheet } from 'react-native';
import colors from './colors';
import { Platform } from 'react-native'

const styles = StyleSheet.create({
    inputText: {
        borderColor: '#000',
        borderWidth: Platform.OS === 'ios' ? 1 : 0,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: colors.accent,
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderWidth: 1,
        borderColor: colors.accent
    },
    disabledButton: {
        backgroundColor: '#666',
        borderColor: '#666'
    },
    invertedButton: {
        backgroundColor: colors.light
    },
    buttonText: {
        color: colors.light,
        fontWeight: 'bold',
        fontSize: 16
    },
    invertedButtonText: {
        color: colors.accent
    },
    textButton: {
        color: colors.accent,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default styles;