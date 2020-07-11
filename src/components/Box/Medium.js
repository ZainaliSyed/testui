import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {Metrics, Colors, Images, AppStyles} from '../../theme';
// import StarRating from 'react-native-star-rating';
import {StarRating} from '../../components';
import {ButtonView} from '../../reuseableComponents';
import {push} from '../../services/NavigationService';

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
    width: Metrics.widthRatio(145),
    height: Metrics.widthRatio(144),
    paddingHorizontal: 15,
  },
  bgStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  txtStyle: {
    paddingTop: Metrics.heightRatio(15),
    ...AppStyles.hlRe(19, Colors.text.white),
    textAlign: 'center',
  },
});

export default Medium;
