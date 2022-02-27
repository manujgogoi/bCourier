import React from 'react';
import {StatusBar} from 'react-native';
import {withTheme} from 'react-native-paper';

const MGStatusBar = props => {
  const {colors} = props.theme;
  return <StatusBar />;
};

export default withTheme(MGStatusBar);
