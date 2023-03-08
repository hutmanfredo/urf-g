import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { StatusBar } from 'react-native';
import StackScreens from './src/StackScreens';
import { GlobalContext } from './src/context/Context';
import { Colors } from './src/utils/Colors';

const App = () => {

  return (
    <GlobalContext.Provider value={{
      openAttendeeTime, setOpenAttendeeTime, openEdit, setOpenedit
    }}>
      <StatusBar barStyle='dark-content' backgroundColor={Colors.white} />
      <StackScreens />
    </GlobalContext.Provider>
  );
};

export default App;
