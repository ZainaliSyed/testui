import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Metrics, Colors, Images, AppStyles} from '../../theme';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import {Separator} from '../../components';
import {FlatListHandler} from '../../reuseableComponents';

export default class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pullUp: 'Pull-up',
      pushUp: 'Push-up',
      plank: 'Plank',
      sitUp: 'Sit-up',
      catPose: 'Cat-pose',
      squats: 'Squats',
      pullUp: 'Pull-up',
    };
  }

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

  exercises = () => {
    return <View></View>;
  };

  renderItem = () => {
    return (
      <View style={styles.childViewChild3}>
        <View style={styles.excrsesMainChild}>
          <View style={styles.excrsesChild}>
            <Text style={styles.excrsesText}>Pull-up</Text>
            <View style={styles.excrsesWorks}>
              <Text style={styles.excrsesText2}>Set 5</Text>
              <Text style={styles.excrsesText2}>Reps 10</Text>
              <Text style={styles.excrsesText2}>Rest 60sec</Text>
            </View>
          </View>
          <View style={styles.excrsesChild2}>
            <View
              style={{
                borderColor: '#1cb281',
                borderWidth: 1,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                width: 30,
                height: 30,
              }}>
              <Image
                source={Images.selectionTick}
                style={{tintColor: '#1cb281'}}
              />
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#202332'}}>
          <Separator.FlatListSeparator style={{marginHorizontal: 16}} />
        </View>
      </View>
    );
  };

  renderSeparator = () => {
    return <Separator.FlatListSeparator style={{marginHorizontal: 16}} />;
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
        <View style={styles.childView2}>
          {this.dateScheduleTime()}

          <View style={styles.childViewChild2}>
            <View>
              <Text style={styles.excrses}>Exercises</Text>
            </View>
          </View>
          <FlatListHandler
            data={['a', 'b', 'c', 'd', 'e']}
            // style={{marginTop: Metrics.heightRatio(25)}}
            // fetchRequest={this.fetchScheduleList}
            renderItem={this.renderItem}
            // ItemSeparatorComponent={this.renderSeparator}
            // emptyImage={Images.emptyNotification}
            // isFetching={this.props.inAppNotificationsIsFetching}
            showsHorizontalScrollIndicator={false}
          />
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
    // width: '100%',
  },

  childView: {
    marginHorizontal: 16,
  },

  instName: {
    color: Colors.text.white,
    fontSize: Metrics.generatedFontSize(16),
    marginTop: 41,
    marginBottom: 10,
  },

  workOut: {
    color: Colors.text.white,
    fontSize: Metrics.generatedFontSize(24),
    marginBottom: 10,
  },

  advns: {
    color: Colors.text.white,
    fontSize: Metrics.generatedFontSize(16),
    marginBottom: 41,
  },

  childView2: {
    backgroundColor: '#5c746a',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
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

  dateView: {},

  scheduleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  timeView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  dateText2: {
    color: Colors.text.white,
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
    color: Colors.text.white,
    fontSize: Metrics.generatedFontSize(24),
    marginTop: 35,
    marginBottom: 10,
  },

  childViewChild3: {
    backgroundColor: '#202332',
    // backgroundColor: 'yellow',
  },

  excrsesMainChild: {
    flexDirection: 'row',
    paddingHorizontal: 16,
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
    color: Colors.text.white,
    fontSize: Metrics.generatedFontSize(24),
    marginTop: 15,
  },

  excrsesText2: {
    color: Colors.text.white,
    fontSize: Metrics.generatedFontSize(16),
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
});
