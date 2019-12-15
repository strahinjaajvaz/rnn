import {Navigation} from 'react-native-navigation';

import {Initializing} from '../screens/Initializing';
import {SignIn} from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';

export function registerScreens() {
  Navigation.registerComponent('Initializing', () => Initializing);
  Navigation.registerComponent('SignIn', () => SignIn);
  Navigation.registerComponent('SignUp', () => SignUp);
}
