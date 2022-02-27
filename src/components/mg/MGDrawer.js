import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import MGStatusBar from './MGStatusBar';

const MGDrawer = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView
        style={{flex: 1}}
        {...props}
        contentContainerStyle={{backgroundColor: '#fff'}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <MGStatusBar />
    </SafeAreaView>
  );
};

export default MGDrawer;
