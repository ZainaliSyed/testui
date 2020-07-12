import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {Metrics, Colors, Images, AppStyles} from '../../theme';
// import StarRating from 'react-native-star-rating';
import {StarRating} from '../../components';
import {ButtonView} from '../../reuseableComponents';
import {push} from '../../services/NavigationService';

const large = (props) => {
  const {item} = props;
  return (
    <ButtonView style={styles.container}>
      <ImageBackground source={item.image} style={styles.bgStyle}>
        <View style={styles.advnsView}>
          <Text style={styles.advnsViewText}>{item.status}</Text>
        </View>
        <View style={styles.workOutView}>
          <Text style={styles.txtStyle}>{item.title}</Text>
          <Text style={styles.txtStyle1}>{item.people}</Text>
        </View>
      </ImageBackground>
    </ButtonView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Metrics.widthRatio(265),
    height: Metrics.widthRatio(255),
    // paddingHorizontal: 15,
    // marginRight: 18,
    marginLeft: 18,
  },
  bgStyle: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
  },
  workOutView: {
    marginHorizontal: 12,
  },
  txtStyle: {
    paddingTop: Metrics.heightRatio(15),
    ...AppStyles.hlRe(19, Colors.text.white),
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  txtStyle1: {
    paddingTop: Metrics.heightRatio(15),
    ...AppStyles.hlRe(19, Colors.text.white),
  },
  advnsView: {
    backgroundColor: '#1CB281',
    width: Metrics.widthRatio(100),
    height: Metrics.widthRatio(23),
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 2.5,
  },

  advnsViewText: {
    ...AppStyles.hlRe(14, Colors.text.white),
    fontWeight: 'bold',
  },
});

export default large;
