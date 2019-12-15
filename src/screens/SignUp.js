import React from 'react';
import styled from 'styled-components';
import {Navigation} from 'react-native-navigation';
import {View, Text, Button} from 'react-native';

function SignUp(props) {
  return (
    <View>
      <Text>Signup</Text>
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
