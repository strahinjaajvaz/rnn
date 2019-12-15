import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/utils/registerScreens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing',
      },
    },
  });
});
