import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const icons = {
    add: {
        font: Ionicons,
        name: 'ios-add'
    }
};

const Icon = function ({name, color = '#000', size = 30}) {
    const iconInfo = icons[name];

    if (!iconInfo) {
        return;
    }

    const IconFont = iconInfo.font;

    return (
        <IconFont name={iconInfo.name} size={size} color={color} />
    )
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number
}

export default Icon;