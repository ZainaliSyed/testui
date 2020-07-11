// @flow
import React from 'react';

import {Text, StyleSheet, View, Image} from 'react-native';

import {Colors, AppStyles, Images, Metrics} from '../../theme';
import {ButtonView, AppButton} from '../../reuseableComponents';
import {pop} from '../../services/NavigationService';
export default HomeHeader = (props) => {
  return (
    <View style={styles.container}>
      <ButtonView onPress={() => pop()} style={{paddingHorizontal: 15}}>
        <Image source={Images.icMenu} />
      </ButtonView>
      <ButtonView onPress={() => pop()} style={{paddingHorizontal: 15}}>
        <Image source={Images.icBack} />
      </ButtonView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.baseMargin,
  },
});
