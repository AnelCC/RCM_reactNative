import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers/PeopleReducer';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './Navigation';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    console.log('App here');
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.light,
  },
  title: {
    color: 'black',
    top: 20,
    left: 10,
    fontSize: 24,
  },
});
