import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {AsyncStorage} from 'react-native';

import {goHome, authenticate} from '../utils/navigation';

function Initializing() {
  useEffect(() => {
    async function getUserData() {
      try {
        const {user} = await AsyncStorage.getItem('user');
        if (user) goHome();
        else authenticate();
      } catch (e) {
        authenticate();
      }
    }
    getUserData();
  });

  return <Text>Loading...</Text>;
}

export {Initializing};
