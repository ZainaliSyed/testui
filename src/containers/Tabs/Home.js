import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import {Metrics, Colors, Images, AppStyles} from '../../theme';
import {FlatListHandler, ButtonView} from '../../reuseableComponents';
import {Box, Header} from '../../components';
export default class Home extends Component {
  state = {
    data: [
      {
        title: 'Catherine Williams',
        image: Images.image1,
      },
      {
        title: 'Mark Foster',
        image: Images.image1,
      },
      {
        title: 'Serena Angel',
        image: Images.image1,
      },
      {
        title: 'Catherine Williams',
        image: Images.image1,
      },
      {
        title: 'Mark Foster',
        image: Images.image1,
      },
      {
        title: 'Serena Angel',
        image: Images.image1,
      },
      {
        title: 'Catherine Williams',
        image: Images.image1,
      },
      {
        title: 'Mark Foster',
        image: Images.image1,
      },
      {
        title: 'Serena Angel',
        image: Images.image1,
      },
    ],
  };

  componentDidMount() {}

  _renderItems = ({item}) => {
    return <Box.Medium item={item} />;
  };
  render() {
    const {data} = this.state;

    return (
      <View style={styles.container}>
        <Header.HomeHeader
          leftIcon={Images.icSearch}
          rightIcon={Images.icPlus}
        />

        <FlatListHandler
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={this._renderItems}
          style={{}}
        />
      </View>
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
});
