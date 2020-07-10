import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Metrics, Colors, Images, AppStyles} from '../../theme';

export default class Home extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const {} = this.props;

    return (
      <View style={styles.container}>
        <Text style={{...AppStyles.hlRe(20, Colors.primary.black)}}>
          Home test 1
        </Text>
        <Text style={{...AppStyles.hlBold(20, Colors.primary.black)}}>
          Home test 2
        </Text>

        <Image source={Images.image1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
