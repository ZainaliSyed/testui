import _ from 'lodash';
import React, {createContext, Component} from 'react';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import RootNavigator from './navigator';
import {navigatorRef, push} from './services/NavigationService';

import {Colors} from './theme';
import constant from './constants';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import Spinner from 'react-native-globalspinner';
import Reachability from 'react-native-reachability-popup';

export const LoginContext = createContext({
  isLogin: false,
  setLogin: () => {},
});

export default class App extends Component {
  componentDidMount() {}

  state = {isReduxLoaded: false};

  onBeforeLift = () => {
    // singleton.storeRef = store;

    this.setState({isReduxLoaded: true}, () => {
      console.log('isReduxLoaded src : ', this.state.isReduxLoaded);
      // SplashScreen.hide();
    });
  };

  render() {
    const {isReduxLoaded} = this.state;

    return (
      <Provider store={store}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.secondary.azure}
        />

        <PersistGate onBeforeLift={this.onBeforeLift} persistor={persistor}>
          {isReduxLoaded ? (
            <RootNavigator
              ref={navigatorRef}
              isLogin={true} // perform a check on user token
            />
          ) : (
            <View />
          )}
        </PersistGate>

        <FlashMessage position="top" />

        <Spinner color={Colors.primary.theme} />

        <Reachability />
      </Provider>
    );
  }
}
