/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Spacer from '../../components/Spacer';
import {Text, Input, Button} from 'react-native-elements';

const SignupScreen = ({navigation}) => {
  return (
    <>
      <Spacer>
        <Text h4>Sign Up for Tracker</Text>
      </Spacer>
      <Spacer>
        <Input label="Email" />
      </Spacer>
      <Spacer>
        <Input label="Password" />
        <Button title="Sign Up" />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
