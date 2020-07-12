import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {Metrics, Colors, Images, AppStyles} from '../../theme';
// import StarRating from 'react-native-star-rating';
import {StarRating} from '../../components';
import {ButtonView} from '../../reuseableComponents';

const Medium = (props) => {
  const {item} = props;
  return (
    <ButtonView style={styles.container}>
      <ImageBackground source={item.image} style={styles.bgStyle}>
        <Text style={styles.txtStyle}>{item.title}</Text>
      </ImageBackground>
    </ButtonView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Metrics.widthRatio(127),
    height: Metrics.widthRatio(128),
    paddingHorizontal: 7,
  },
  bgStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.widthRatio(127),
    height: Metrics.widthRatio(128),
    paddingHorizontal: 7,
  },
  txtStyle: {
    paddingTop: Metrics.heightRatio(15),
    ...AppStyles.hlRe(18, Colors.text.white),
    textAlign: 'center',
  },
  txtStyle2: {
    ...AppStyles.hlRe(18, Colors.text.white),
    textAlign: 'center',
    lineHeight: 15,
  },
});

export default Medium;
