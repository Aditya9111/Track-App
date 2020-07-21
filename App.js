import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';

const switchNavigator = createSwitchNavigator({
  loginflow: createStackNavigator({
    SignUp: SignupScreen,
    SignIn: SigninScreen,
  }),

  mainflow: createBottomTabNavigator({
    trackListflow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),

    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const styles = StyleSheet.create({});

export default createAppContainer(switchNavigator);
