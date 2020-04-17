import React from 'react';
import {StatusBar, StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers/PeopleReducer';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PeopleList from './PeopleList';

const store = createStore(reducers);

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Provider store={store}>
          <View style={styles.body}>
            <Text style={styles.title}>Simple List</Text>
            <PeopleList />
          </View>
        </Provider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  title: {
    color: 'black',
    top: 20,
    left: 10,
    fontSize: 24,
  },
});

export default App;
