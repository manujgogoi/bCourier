/**
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react'; // Enable  React JSX
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Redux-toolkit
import store from './src/app/store';
import {Provider} from 'react-redux';

// React Native Paper theme
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

// Customize React Native Paper theme
const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function Main() {
  return (
    <Provider store={store}>
      {/* Provides the Paper theme to all the components in the framework */}
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
