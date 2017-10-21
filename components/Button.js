import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import defaultStyles from '../utils/styles';

const Button = function ({text, onPress, disabled, inverted, style}) {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[defaultStyles.button, (inverted && defaultStyles.invertedButton), (disabled && defaultStyles.disabledButton), style]}>
            <View style={{alignItems: 'center'}}>
                <Text style={[defaultStyles.buttonText, (inverted && defaultStyles.invertedButtonText)]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    inverted: PropTypes.bool,
    style: PropTypes.object
};

export default Button;