import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Metrics, Colors, Images, AppStyles} from '../../theme';

export default class Sessions extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const {} = this.props;

    return (
      <View style={styles.container}>
        <View></View>
        <Image source={Images.image2} style={styles.Sessionbg} />
        <Text>Sessions</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  Sessionbg: {
    width: '100%',
    // resizeMode: '',
  },
});
