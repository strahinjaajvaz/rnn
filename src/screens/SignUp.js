import React, {useState} from 'react';
import styled from 'styled-components';
import {Navigation} from 'react-native-navigation';
import {View, Text, Button, TextInput} from 'react-native';
import {Auth} from 'react-native-firebase/auth';

function SignUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Signup</Text>
      <View>
        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          textContentType="emailAddress"
          placeholder="Email"
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          value={password}
          textContentType="password"
          placeholder="Password"
        />
      </View>
      <Button
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'SignIn',
              passProps: {
                text: 'this has been clicked',
              },
            },
          })
        }
        title="Register"
        disabled={email && password}
      />
      <Button
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'SignIn',
              passProps: {
                text: 'this has been clicked',
              },
            },
          })
        }
        title="Sign In"
      />
    </View>
  );
}

export {SignUp};
