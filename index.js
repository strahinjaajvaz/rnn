import {start} from './src/Navigation';
import {NativeModules} from 'react-native';

if (__DEV__) {
  NativeModules.DevMenu.debugRemotely(true);
}
start();
