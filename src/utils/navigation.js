import {Navigation} from 'react-native-navigation';

export function goHome() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [{component: {name: 'HomeScreen'}}],
      },
    },
  });
}

export function authenticate() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Authentication',
        children: [
          {
            component: {name: 'SignIn'},
          },
          {
            component: {name: 'SignUp'},
          },
        ],
      },
    },
  });
}
