// @flow
import React from 'react';

import {Text, StyleSheet, View, Image} from 'react-native';

import {Colors, AppStyles, Images, Metrics} from '../../theme';
import {ButtonView} from '../../reuseableComponents';
import {pop} from '../../services/NavigationService';
export default HomeHeader = (props) => {
  return (
    <View style={styles.container}>
      <ButtonView>
        <Image
          source={props.leftIcon}
          style={{
            width: 20,
            height: 20,
            padding: 10,
            tintColor: Colors.primary.white,
          }}
        />
      </ButtonView>
      <ButtonView>
        <Image source={props.rightIcon} style={{width: 20, height: 20}} />
      </ButtonView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    // paddingHorizontal: Metrics.baseMargin,
  },
});
