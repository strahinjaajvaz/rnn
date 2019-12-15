import React from 'react';
import styled from 'styled-components';
import {Navigation} from 'react-native-navigation';
import {View, Text, Button} from 'react-native';

function SignIn(props) {
  console.log(props);
  return (
    <View>
      <Text>Sign In</Text>
      {props.text && <Text>{props.text}</Text>}

      <Button
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'SignUp',
            },
          })
        }
        title="Sign Up"
      />
    </View>
  );
}

export {SignIn};
