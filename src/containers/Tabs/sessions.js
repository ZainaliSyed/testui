import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {Metrics, Colors, Images, AppStyles} from '../../theme';
import {Separator} from '../../components';
import {FlatListHandler} from '../../reuseableComponents';

export default class Sessions extends Component {
  state = {
    data: [
      'Pull-up',
      'Push-up',
      'Plank',
      'Sit-up',
      'Cat-pose',
      'Squats',
      'Pull-up',
    ],
  };
  componentDidMount() {}

  dateScheduleTime = () => {
    return (
      <View style={styles.childViewChild}>
        <View style={styles.dateView}>
          <Text style={styles.dateText}>4 Feb</Text>
          <Text style={styles.dateText2}>Date</Text>
        </View>
        <View style={styles.scheduleView}>
          <Text style={styles.dateText}>h 14:00</Text>
          <Text style={styles.dateText2}>Schedule</Text>
        </View>
        <View style={styles.timeView}>
          <Text style={styles.dateText}>1 hr</Text>
          <Text style={styles.dateText2}>Time</Text>
        </View>
      </View>
    );
  };

  renderItem = ({item, index}) => {
    const {data} = this.state;
    return (
      <View
        style={[
          styles.childViewChild3,
          data.length - 1 == index ? {paddingBottom: 30} : {},
        ]}>
        <View style={styles.excrsesMainChild}>
          <View style={styles.excrsesChild}>
            <Text style={styles.excrsesText}>{item}</Text>
            <View style={styles.excrsesWorks}>
              <Text style={styles.excrsesText2}>Set 5</Text>
              <Text style={styles.excrsesText2}>Reps 10</Text>
              <Text style={styles.excrsesText2}>Rest 60sec</Text>
            </View>
          </View>
          <View style={styles.excrsesChild2}>
            {data.length - 1 == index ? (
              <View style={styles.selectionDashView}></View>
            ) : (
              <View style={styles.selectionTickView}>
                <Image
                  source={Images.selectionTick}
                  style={{tintColor: '#1CB281'}}
                />
              </View>
            )}
          </View>
        </View>
        <View style={styles.ViewSeparator}>
          <Separator.FlatListSeparator style={{marginHorizontal: 16}} />
        </View>
      </View>
    );
  };

  render() {
    const {} = this.props;

    return (
      <View style={styles.container}>
        <SafeAreaView style={{backgroundColor: 'black'}} />
        <ImageBackground source={Images.large_image} style={styles.Sessionbg}>
          <View style={styles.childView}>
            <Text style={styles.instName}>Catherine Williams</Text>
            <Text style={styles.workOut}>Back and Abs</Text>
            <Text style={styles.advns}>Advansed</Text>
          </View>
        </ImageBackground>
        <View style={{flex: 1}}>
          <View style={styles.childView2}>
            {this.dateScheduleTime()}

            <View style={styles.childViewChild2}>
              <View>
                <Text style={styles.excrses}>Exercises</Text>
              </View>
            </View>
            <FlatListHandler
              data={this.state.data}
              // style={{marginBottom: Metrics.heightRatio(60)}}
              // fetchRequest={this.fetchScheduleList}
              renderItem={this.renderItem}
              // ItemSeparatorComponent={this.renderSeparator}
              // emptyImage={Images.emptyNotification}
              // isFetching={this.props.inAppNotificationsIsFetching}
              // showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Sessionbg: {
    height: 240,
    flex: 1,
  },

  childView: {
    marginHorizontal: 16,
  },

  instName: {
    ...AppStyles.hlRe(16, Colors.text.white),
    marginTop: 41,
    marginBottom: 10,
  },

  workOut: {
    ...AppStyles.hlBold(24, Colors.text.white),
    marginBottom: 10,
  },

  advns: {
    ...AppStyles.hlRe(16, Colors.text.white),
    marginBottom: 64,
  },

  childView2: {
    backgroundColor: '#5c746a',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: -120,
  },

  childViewChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#5c746a',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },

  childViewChild2: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: '#202332',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 20,
  },

  scheduleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  timeView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    marginTop: 10,
    marginBottom: 10,
    ...AppStyles.hlBold(18, Colors.text.white),
  },
  dateText2: {
    ...AppStyles.hlRe(14, Colors.text.white),
    textAlign: 'center',
  },

  childViewChild2: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: '#202332',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 20,
  },

  excrses: {
    ...AppStyles.hlBold(20, Colors.text.white),
    marginTop: 35,
    marginBottom: 10,
  },

  childViewChild3: {
    backgroundColor: '#202332',
  },

  excrsesMainChild: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 5,
    backgroundColor: '#202332',
  },

  excrsesChild: {
    flex: 1,
  },

  excrsesWorks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  excrsesText: {
    ...AppStyles.hlBold(18, Colors.text.white),
    marginTop: 15,
  },

  excrsesText2: {
    // color: Colors.text.white,
    color: '#FFFFFF69',
    fontSize: Metrics.generatedFontSize(12),
    marginTop: 5,
    marginBottom: 5,
  },

  excrsesChild2: {
    flex: 1,
    alignItems: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10,
  },

  selectionTickView: {
    borderColor: '#1cb281',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
  },

  selectionDashView: {
    borderColor: '#1cb281',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
  },

  ViewSeparator: {
    backgroundColor: '#202332',
  },
});
