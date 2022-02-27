/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MGDrawer from './src/components/mg/MGDrawer';

import {isServerAvailable} from './src/utils/isServerAvailable';

import HomeScreen from './src/screens/home';
import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';
import OrdersScreen from './src/screens/orders';

import {useSelector, useDispatch} from 'react-redux';

import {getTokens, removeTokens} from './src/services/encryptedStorage';

const Drawer = createDrawerNavigator();

const App = () => {
  const auth = useSelector(state => state.auth);
  const [tokens, setTokens] = React.useState(null);

  // Server availability check
  React.useEffect(() => {
    isServerAvailable();
    // console.log(auth);
  }, []);

  // login check
  React.useEffect(() => {
    let unmounted = false;

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <NavigationContainer>
      {/* Set useLegacyImplementation={true} for using reanimated 2  */}
      {/* <MGDrawer> is custom drawer */}
      <Drawer.Navigator
        drawerContent={props => <MGDrawer {...props} />}
        useLegacyImplementation={true}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="Orders" component={OrdersScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default App;
