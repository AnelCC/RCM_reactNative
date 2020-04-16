import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers/PeopleReducer';

const store = createStore(reducers);

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
      </Provider>
    </>
  );
};
export default App;
