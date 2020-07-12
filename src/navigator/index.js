import {dyanimcTitle} from './navigatorHelper';
import React, {forwardRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './Tabs';

const rootNavigator = forwardRef((props, ref) => (
  <NavigationContainer ref={ref}>
    {/* props.isLogin ? <DrawerNav /> : <DrawerNav /> */}
    {props.isLogin ? <Tabs /> : <Tabs />}
  </NavigationContainer>
));

export default rootNavigator;
