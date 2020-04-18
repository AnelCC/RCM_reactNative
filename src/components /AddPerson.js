import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Icon from 'react-native-vector-icons/RNIMigration';

class AddPerson extends Component {
  static defaultNavigationOptions = {
    title: 'AddPerson',
    tabBarIcon: ({tintColor}) => {(
      <Icon name="home" size={24} color={tintColor} />
    )},
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add person screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cbb7ca',
    height: '100%',
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
  },
  text: {
    paddingTop: '100%',
  },
});

export default connect(null, actions)(AddPerson);
