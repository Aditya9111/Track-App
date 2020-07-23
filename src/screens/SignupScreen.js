import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import Spacer from "../../components/Spacer";
import { Text, Input, Button } from "react-native-elements";
import { Context as AuthContext } from "../../context/authContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h4> Sign Up for Tracker </Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(newEmail) => {
            setEmail(newEmail);
          }}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {state.errorMessage ? (
          <Text style={styles.error}>{state.errorMessage}</Text>
        ) : null}
        <Button
          title="Sign Up"
          onPress={() => {
            signup({ email, password });
          }}
        />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 150,
  },

  error: {
    fontSize: 15,
    color: "red",
    marginBottom: 3,
  },
});

export default SignupScreen;
