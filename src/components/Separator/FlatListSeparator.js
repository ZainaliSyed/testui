import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Metrics, Colors} from '../../theme';

const Separator = (props: Object) => {
  const {style} = props;
  return <View style={[styles.container, style]} />;
};

Separator.defaultProps = {
  style: {},
};
Separator.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
};

export default Separator;

const styles = StyleSheet.create({
  container: {
    // height: Metrics.horizontalLineHeight,
    // marginHorizontal: Metrics.baseMargin,
    // borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#5C746A',
  },
});
