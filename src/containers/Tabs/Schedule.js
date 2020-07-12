import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Schedule extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const {} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.txtStyle}>Welcome To Schedule</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202332',
  },
  txtStyle: {
    color: 'white',
  },
});
