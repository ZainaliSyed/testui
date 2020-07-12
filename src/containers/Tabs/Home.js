import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Metrics, Colors, Images, AppStyles} from '../../theme';
import {FlatListHandler, ButtonView} from '../../reuseableComponents';
import {Box, Header} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
export default class Home extends Component {
  state = {
    data: [
      {
        title: 'Catherine',
        title2: 'Williams',
        image: Images.image1,
      },
      {
        title: 'Mark',
        title2: 'Foster',
        image: Images.small_image2,
      },
      {
        title: 'Serena',
        title2: 'Angel',
        image: Images.small_image3,
      },
      {
        title: 'Catherine',
        title2: 'Williams',
        image: Images.image1,
      },
      {
        title: 'Mark',
        title2: 'Foster',
        image: Images.small_image2,
      },
      {
        title: 'Serena',
        title2: 'Angel',
        image: Images.small_image3,
      },
      {
        title: 'Catherine',
        title2: 'Williams',
        image: Images.image1,
      },
      {
        title: 'Mark',
        title2: 'Foster',
        image: Images.small_image2,
      },
      {
        title: 'Serena',
        title2: 'Angel',
        image: Images.small_image3,
      },
    ],

    data2: [
      {
        title: 'Back and Abs',
        image: Images.medium_image,
        people: '13 people this week',
        status: 'Advanced',
      },
      {
        title: 'Biceps',
        image: Images.medium_image2,
        people: '28 people this week',
        status: 'Beginner',
      },
      {
        title: 'Back and Abs',
        image: Images.medium_image,
        people: '13 people this week',
        status: 'Advanced',
      },
      {
        title: 'Biceps',
        image: Images.medium_image2,
        people: '28 people this week',
        status: 'Beginner',
      },
      {
        title: 'Back and Abs',
        image: Images.medium_image,
        people: '13 people this week',
        status: 'Advanced',
      },
      {
        title: 'Biceps',
        image: Images.medium_image2,
        people: '28 people this week',
        status: 'Beginner',
      },
    ],
  };

  componentDidMount() {}

  _renderItems2 = ({item}) => {
    return <Box.Large item={item} />;
  };

  _renderItems = ({item}) => {
    return <Box.Medium item={item} />;
  };
  render() {
    const {data, data2} = this.state;

    return (
      <ScrollView style={styles.container}>
        <SafeAreaView style={{backgroundColor: Colors.primary}} />
        <Header.HomeHeader
          leftIcon={Images.icSearch}
          rightIcon={Images.icPlus}
        />

        <View style={styles.welcme}>
          <Text style={styles.welcmeText}>Wellcome back, Alberto!</Text>

          <View style={styles.welcmeChildView}>
            <View style={styles.todayView}>
              <Text style={styles.todayViewText}>Today {'\n'} 14:00</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={styles.hourTrning}>
              <Text style={styles.todayViewText}>
                1 hour training session with {'\n'} Satya Clarke
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.trainngSesion}>
          <Text style={styles.trainngSesionText}>
            Your training {'\n'} sessions
          </Text>
        </View>

        <FlatListHandler
          horizontal
          data={data2}
          showsHorizontalScrollIndicator={false}
          renderItem={this._renderItems2}
          style={{}}
        />

        <View style={styles.latestClient}>
          <Text style={styles.latestClientText}>Latest clients</Text>
        </View>

        <FlatListHandler
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={this._renderItems}
          style={{}}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202332',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  welcme: {
    flex: 1,
    marginHorizontal: 18,
    marginTop: 39.26,
  },

  welcmeText: {
    color: Colors.text.white,
    fontSize: Metrics.generatedFontSize(20),
    marginBottom: 15,
  },

  welcmeChildView: {
    flex: 1,
    flexDirection: 'row',
  },

  todayView: {
    flex: 1,
  },

  todayViewText: {
    color: Colors.text.white,
    fontSize: Metrics.generatedFontSize(18),
    borderLeftWidth: 1,
  },

  verticalLine: {
    flex: 0.2,
    borderLeftWidth: 1,
    borderLeftColor: '#5c746a',
    height: 38,
  },

  hourTrning: {
    flex: 4,
  },

  trainngSesion: {
    flex: 1,
    marginHorizontal: 18,
    marginTop: 45,
  },

  trainngSesionText: {
    color: Colors.text.white,
    fontSize: Metrics.generatedFontSize(24),
    fontWeight: 'bold',
    marginBottom: 15,
  },

  latestClient: {
    flex: 1,
    marginHorizontal: 18,
    marginTop: 25,
  },

  latestClientText: {
    color: Colors.text.white,
    fontSize: Metrics.generatedFontSize(18),
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
