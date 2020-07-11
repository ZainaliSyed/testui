// @flow
import React from 'react';

import {Text, StyleSheet, View, Image} from 'react-native';

import {Colors, AppStyles, Images, Metrics} from '../../theme';
import {ButtonView, AppButton} from '../../reuseableComponents';
import {pop} from '../../services/NavigationService';
export default HomeHeader = (props) => {
  return (
    <View style={styles.container}>
      <ButtonView style={{paddingHorizontal: 15}}>
        <Image tintColor={Colors.primary.white} source={props.leftIcon} />
      </ButtonView>
      <ButtonView style={{paddingHorizontal: 15}}>
        <Image source={props.rightIcon} />
      </ButtonView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.baseMargin,
  },
});
