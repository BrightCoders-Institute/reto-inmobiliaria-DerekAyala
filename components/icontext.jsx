import React from 'react';
import {
  Text, View,
} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

function IconText({
  icon,
  iconStyle,
  text,
  textStyles,
  color,
  size,
  ViewStyle,
}) {
  return (
    <View style={ViewStyle}>
      <MaterialCommunityIcons style={iconStyle} name={icon} size={size} color={color} />
      <Text style={textStyles}>{text}</Text>
    </View>
  );
}

IconText.propTypes = {
  ViewStyle: PropTypes.arrayOf(PropTypes.shape).isRequired,
  iconStyle: PropTypes.shape(),
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textStyles: PropTypes.arrayOf(PropTypes.shape).isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

IconText.defaultProps = {
  iconStyle: null,
};

export default IconText;
