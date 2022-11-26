import  'react-native-gesture-handler'
import './src/assets/language'; 


import React, { createContext, useState, useEffect } from 'react';
import {
  LogBox,
} from 'react-native';
import Navigator from './src/navigator'
import Preference from 'react-native-default-preference';
LogBox.ignoreAllLogs();
export const CommonContext = createContext();

const App = () => {

  const [isRTL, setIsRTL] = useState()
  const [isDark, setIsDark] = useState()
  const [currSymbol, setCurrSymbol] = useState('₹')
  const [currValue, setCurrValue] = useState(1)

  useEffect(() => {
    getValues()
  }, [])

  const getValues = async () => {
    await Preference.get('RTL').then(function (value) { setIsRTL(value === 'true') });
    await Preference.get('Dark').then(function (value) { setIsDark(value === 'true') });
    await Preference.get('CurrSymbol').then(function (value) { value && setCurrSymbol(value) });
    await Preference.get('CurrValue').then(function (value) { value && setCurrValue(parseFloat(value)) });
  }

  const contextValues = { isRTL, setIsRTL, isDark, setIsDark, currSymbol, setCurrSymbol, currValue, setCurrValue }

  return (
    <CommonContext.Provider value={contextValues}>
      <Navigator />
    </CommonContext.Provider>
  );
};
export default App;

