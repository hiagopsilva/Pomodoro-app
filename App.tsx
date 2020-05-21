import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <>
    <StatusBar barStyle="default" backgroundColor="#1C354F" />
    <Routes />
    </>
  );
}
