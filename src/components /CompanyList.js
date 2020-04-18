import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Icon from 'react-native-vector-icons/RNIMigration';

class CompanyList extends Component {
  static navigationOptions = {
    title: 'Company',
    tabBarIcon: ({tintColor}) => {
      <Icon name={'user'} size={50} color={tintColor} />;
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Company screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b3cbad',
    height: '100%',
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
  },
  text: {
    paddingTop: '100%',
  },
});

export default connect(null, actions)(CompanyList);
