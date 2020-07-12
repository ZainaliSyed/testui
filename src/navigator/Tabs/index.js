import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../containers/Tabs/Home';
import Details from '../../containers/Tabs/Details';
import Sessions from '../../containers/Tabs/sessions';
import Schedule from '../../containers/Tabs/Schedule';

import {Images, Metrics} from '../../theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const DetailsStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);
const ScheduleStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Schedule" component={Schedule} />
  </Stack.Navigator>
);

const SessionsStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Sessions" component={Sessions} />
  </Stack.Navigator>
);

export default TabNav = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: '#202332',
        borderTopWidth: 0,
        height: Metrics.screenHeight >= 812 ? 100 : 65,
        paddingTop: 10,
      },
      labelStyle: {
        marginVertical: 5,
      },
      showIcon: true,
      activeTintColor: '#1cb281',
    }}>
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{
        tabBarLabel: 'Gym',
        tabBarIcon: ({color, size}) => (
          <Image
            style={{tintColor: color}}
            source={Images.icGym}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="DetailsStack"
      component={DetailsStack}
      options={{
        tabBarLabel: 'Clients',
        tabBarIcon: ({color, size}) => (
          <Image style={{tintColor: color}} source={Images.icClients} />
        ),
      }}
    />
    <Tab.Screen
      name="SessionsStack"
      component={SessionsStack}
      options={{
        tabBarLabel: 'Sessions',
        tabBarIcon: ({color, size}) => (
          <Image style={{tintColor: color}} source={Images.icSessions} />
        ),
      }}
    />
    <Tab.Screen
      name="ScheduleStack"
      component={ScheduleStack}
      options={{
        tabBarLabel: 'Schedule',
        tabBarIcon: ({color, size}) => (
          <Image style={{tintColor: color}} source={Images.icSchedule} />
        ),
      }}
    />
  </Tab.Navigator>
);
