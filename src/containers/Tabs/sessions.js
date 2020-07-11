import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {Metrics, Colors, Images, AppStyles} from '../../theme';

export default class Sessions extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const {} = this.props;

    return (
      <View style={styles.container}>
        <ImageBackground source={Images.large_image} style={styles.Sessionbg}>
          <View style={styles.childView}>
            <Text style={styles.instName}>Catherine Williams</Text>
            <Text style={styles.workOut}>Back and Abs</Text>
            <Text style={styles.advns}>Advansed</Text>
          </View>
          <View style={styles.childView2}>
            <View style={styles.dateView}>
              <Text style={styles.dateText}>4 Feb</Text>
              <Text style={styles.dateText2}>Date</Text>
            </View>
            <View style={styles.scheduleView}>
              <Text style={styles.advns}>h 14:00</Text>
              <Text style={styles.advns}>Schedule</Text>
            </View>
            <View style={styles.timeView}>
              <Text style={styles.advns}>1 hr</Text>
              <Text style={styles.advns}>Time</Text>
            </View>
          </View>
        </ImageBackground>
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
  childView: {
    marginHorizontal: 16,
  },
  instName: {
    color: 'white',
    fontSize: Metrics.generatedFontSize(16),
    marginTop: 41,
    marginBottom: 10,
  },
  workOut: {
    color: 'white',
    fontSize: Metrics.generatedFontSize(24),
    marginBottom: 10,
  },
  advns: {
    color: 'white',
    fontSize: Metrics.generatedFontSize(16),
    marginBottom: 41,
  },
  childView2: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: '#5c746a',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  dateView: {
    flex: 1,
  },
  scheduleView: {
    flex: 2,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  dateText2: {
    color: 'white',
  },
});
