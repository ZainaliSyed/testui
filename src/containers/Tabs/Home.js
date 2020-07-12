import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Metrics, Colors, Images, AppStyles} from '../../theme';
import {FlatListHandler} from '../../reuseableComponents';
import {Box, Header} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
export default class Home extends Component {
  state = {
    data: [
      {
        title: 'Catherine Williams',
        image: Images.image1,
      },
      {
        title: 'Mark Foster',
        image: Images.small_image2,
      },
      {
        title: 'Serena Angel',
        image: Images.small_image3,
      },
      {
        title: 'Catherine Williams',
        image: Images.image1,
      },
      {
        title: 'Mark Foster',
        image: Images.small_image2,
      },
      {
        title: 'Serena Angel',
        image: Images.small_image3,
      },
      {
        title: 'Catherine Williams',
        image: Images.image1,
      },
      {
        title: 'Mark Foster',
        image: Images.small_image2,
      },
      {
        title: 'Serena Angel',
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
        image: Images.medium_image,
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
        image: Images.medium_image,
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
        image: Images.medium_image,
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
          style={{marginBottom: 10}}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202332',
  },

  welcme: {
    flex: 1,
    marginHorizontal: 18,
    marginTop: 30,
  },

  welcmeText: {
    ...AppStyles.hlRe(20, Colors.text.white),
    marginBottom: 22,
  },

  welcmeChildView: {
    flex: 1,
    flexDirection: 'row',
  },

  todayView: {
    flex: 1,
  },

  todayViewText: {
    ...AppStyles.hlRe(18, Colors.text.white),
    lineHeight: 22,
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
    marginTop: 64,
    marginBottom: 28,
  },

  trainngSesionText: {
    ...AppStyles.hlBold(24, Colors.text.white),
  },

  latestClient: {
    flex: 1,
    marginHorizontal: 18,
    marginTop: 61,
  },

  latestClientText: {
    ...AppStyles.hlBold(18, Colors.text.white),
    marginBottom: 15,
  },
});
